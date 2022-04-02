import Image from "next/image";
import React from "react";

export default function Card() {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <Image layout="responsive" src={BASE_URL} width={200} height={100} />
      <div className="p-2">
        <p className="truncate text-lg"></p>
      </div>
    </div>
  );
}
