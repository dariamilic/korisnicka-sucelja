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
  const { title, filters, slug, thumbnail } = objave.fields;

  const imageUrl = thumbnail?.fields?.file?.url ? `https:${thumbnail.fields.file.url}` : '';

  return (
    

    <div className="card">
      <div className="card-image">
        {imageUrl && (
          <Image 
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="card-content text-gray-700 text-bold">
        <h4>{title}</h4>
        <p>filters: {filters}</p>
      </div>
      <div className="card-footer text-left">
        <Link href={`/search/${slug}`} className="text-brown-200 underline">
          See this
        </Link>
      </div>
    </div>
  );
}