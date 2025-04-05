import Link from "next/link";
import Image from "next/image";

interface NewsItemProps {
  id: string | number;
  image: string;
  title: string;
  date: string;
  description: string;
  featured?: boolean;
}

export default function NewsItem({
  id,
  image,
  title,
  date,
  description,
  featured = false,
}: NewsItemProps) {
  if (featured) {
    return (
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-[20px] font-[600] mb-2">
            <Link
              href={`/news/${id}`}
              className="text-black hover:text-[#FF1654]"
            >
              {title}
            </Link>
          </h2>
          <div className="text-[#666666] text-[12px] mb-4">{date}</div>
          <div className="text-[14px] text-[#666666] mb-4">{description}</div>
          <Link
            href={`/news/${id}`}
            className="text-[#FF1654] text-[14px] hover:underline"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F8F8] rounded-lg p-4">
      <Image
        src={"/images/news-1.jpg"}
        alt={title}
        width={400}
        height={225}
        className="w-full rounded-lg mb-4"
      />
      <h3 className="text-[16px] font-[600] mb-2">
        <Link href={`/news/${id}`} className="text-black hover:text-[#FF1654]">
          {title}
        </Link>
      </h3>
      <div className="text-[#666666] text-[12px] mb-4">{date}</div>
      <div className="text-[14px] text-[#666666] mb-4">{description}</div>
      <Link
        href={`/news/${id}`}
        className="text-[#FF1654] text-[14px] hover:underline"
      >
        Xem thêm
      </Link>
    </div>
  );
}
