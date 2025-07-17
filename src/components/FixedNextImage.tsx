import React from "react";
import Image, { ImageProps } from "next/image";

interface FixedNextImageProps extends ImageProps {}

export function FixedNextImage(props: FixedNextImageProps) {
  const { onLoad, ...rest } = props;

  return <Image {...rest} onLoad={onLoad} />;
}
