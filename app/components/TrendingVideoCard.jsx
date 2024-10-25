"use client";
import Image from "next/image";
import bookmark from "../../public/assets/icon-bookmark-empty.svg";

export default function TrendingVideoCard({
  category,
  bookmarked,
  trending,
  rating,
  thumbnails,
  title,
  year,
}) {
  let small = thumbnails.small;

  return (
    <div
      className="relative p-4 md:m-4 rounded-md bg-cover bg-center h-40 flex flex-col justify-end"
      style={{ backgroundImage: `url(${small})` }}
    >
      <div className="absolute top-4 right-4  bg-black bg-opacity-50 p-2 rounded-full">
        <Image
          className="md:w-11 md:h-10 "
          src={bookmark}
          alt="Movies App Logo"
          width={15}
          height={15}
          objectFit="contain"
        />
      </div>

      <div className=" flex flex-col">
        <div className="flex gap-2 text-sm">
          <p className="text-gray-500">{year}</p>
          <span className="mx-1 text-gray-500">•</span>
          <p className="text-gray-500">{category}</p>
          <span className="mx-1 text-gray-500">•</span>
          <p className="text-gray-500">{rating}</p>
        </div>
        <h1 className="text-white font-semibold text-lg">{title}</h1>
      </div>
    </div>
  );
}
