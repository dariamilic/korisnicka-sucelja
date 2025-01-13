import { createClient } from 'contentful';


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONNTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONNTENTFUL_ACCESS_TOKEN || '',
});
export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'objave' });
  return res.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

export async function getData(slug: string) {
  const res = await client.getEntries({
    content_type: 'objave',
    'fields.slug': slug,
  });

  return res.items[0] || null;
}

export default async function objavaDetalji({ params }: { params: { slug: string } }) {
  const objava = await getData(params.slug);
  console.log(objava);

  if (!objava) {
    return <div>Objava not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">{typeof objava.fields.title === 'string' ? objava.fields.title : 'Untitled'}</h1>
      <p>{typeof objava.fields.about === 'string' ? objava.fields.about : 'No description available'}</p>
      {/* Display other details */}
    </main>
  );
}