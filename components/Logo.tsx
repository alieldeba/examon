import Image from "next/image";
import React from "react";

export default function Logo({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src="https://cdn-icons-png.flaticon.com/512/1043/1043281.png"
      className={className}
      width={width}
      height={height}
      alt="Examon logo"
    />
  );
}
