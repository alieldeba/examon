import Image from "next/image";
import React from "react";

interface propsType {
  width: number;
  height: number;
  className?: string;
}

export default function Logo({ width, height, className }: propsType) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/256/5564/5564715.png"
      className={className}
      width={width}
      height={height}
      alt="Examon logo"
    />
  );
}
