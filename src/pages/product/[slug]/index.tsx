"use client";

import { log } from "console";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Product: {params?.slug}</h1>
    </div>
  );
}
