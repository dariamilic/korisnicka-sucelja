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
  const { title, slug, thumbnail } = objave.fields;

  const imageUrl = thumbnail?.fields?.file?.url ? `https:${thumbnail.fields.file.url}` : '';

  return (
    <Link href={`/search/${slug}`} passHref>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col w-full h-[350px]">
        <div className="w-full h-[200px] overflow-hidden">
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
        <div className="text-gray-700 font-bold p-4 flex-grow">
          <h4 className="text-lg">{title}</h4>
        </div>
        <div className="p-4 mt-auto">
          <span className="text-brown-200">See more</span>
        </div>
      </div>
    </Link>
  );
}

// Uključi ovaj kod u roditeljsku komponentu gdje prikazuješ više kartica
export function ObjaveGrid({ objaveList }: { objaveList: Objave[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {objaveList.map((objave, index) => (
        <ObjaveCard key={index} objave={objave} />
      ))}
    </div>
  );
}
