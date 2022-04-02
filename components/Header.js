import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between"></div>
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        }
        width={100}
        height={100}
        className="cursor-pointer active:brightness-110"
      />
    </div>
  );
}
