import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONNTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONNTENTFUL_ACCESS_KEY || '',
});

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'objave' });
  return res.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

export async function getData(slug: string)  {
  const res = await client.getEntries({
    content_type: 'objave',
    'fields.slug': slug,
  });

  return res.items[0] || null;
}

export default async function objavaDetalji({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) {
    return <div>Error: Invalid or missing slug parameter</div>;
  }

  const objava = await getData(params.slug);
  console.log(objava);

  if (!objava) {
    return <div>Objava not found</div>;
  }

  const fields = objava.fields || {};
  const filtersText =
    typeof fields.filters === 'string'
      ? fields.filters
      : Array.isArray(fields.filters)
      ? fields.filters.join(', ')
      : 'No filters available';
  const imageUrl =
    fields.thumbnail &&
    typeof fields.thumbnail === 'object' &&
    'fields' in fields.thumbnail &&
    'file' in (fields.thumbnail as any).fields
      ? `https:${(fields.thumbnail.fields as any).file.url}`
      : null;

  const filtersArray = filtersText.split(', ');

  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-10 relative bg-gray-50">
    {/* Go Back Button */}
    <div className="absolute top-4 left-4">
      <Link
        href="/search"
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
      >
        Go Back
      </Link>
    </div>
  
    {/* Title */}
    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-10 mb-10 text-center">
      {typeof fields.title === 'string' ? fields.title : 'Untitled'}
    </h1>
  
    {/* Content Wrapper */}
    <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center gap-10 lg:gap-40">
      {/* Left Column */}
      <div className="text-justify flex flex-col justify-start max-w-md">
        {/* About Section */}
        <div className="py-2">
          <h3 className="text-xl font-semibold">About:</h3>
          <p>{typeof fields.about === 'string' ? fields.about : 'No description available'}</p>
        </div>
        
        {/* What's Included Section */}
        <div>
          <h3 className="text-xl font-semibold py-4">What&apos;s included:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {filtersArray.map((filter, index) => (
              <li key={index}>{filter}</li>
            ))}
          </ul>
        </div>
      </div>
  
      {/* Right Column */}
      <div className="flex justify-center">
        {imageUrl ? (
          <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={imageUrl}
              alt={
                typeof fields.thumbnail === 'object' && 'fields' in fields.thumbnail
                  ? (fields.thumbnail.fields as any).title || 'Thumbnail'
                  : 'Thumbnail'
              }
              layout="responsive"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
      </div>
    </div>
  </main>
  
  );
}

