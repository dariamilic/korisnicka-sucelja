import Image from 'next/image';
import Link from 'next/link';

interface Objave {
  fields: {
    title: string;
    about: string;
    filters: string;
    slug: string;
    rating: number;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export default function ObjaveCard({ objave }: { objave: Objave }) {
 // @typescript-eslint/no-unused-vars
//  const { title, about, filters, slug, rating, thumbnail } = objave.fields;
//  const { title, filters, slug, thumbnail } = objave.fields;
  const { title, slug, thumbnail } = objave.fields;

  const imageUrl = thumbnail?.fields?.file?.url ? `https:${thumbnail.fields.file.url}` : '';

  return (
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="card-image w-full h-[200px] overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      )}
    </div>
    <div className="card-content text-gray-700 font-bold p-4 flex-grow">
      <h4 className="text-lg">{title}</h4>
    </div>
    <div className="card-footer p-4 mt-auto">
      <Link href={`/search/${slug}`} className="text-brown-200">
        See more
      </Link>
    </div>
  </div>
  
  );
}