import React from "react";
import styled from "styled-components";

interface ImageProps {
  objectFit: string;
  src: string;
  alt: string;
}

const StyledImage = styled.img<{ objectFit: string }>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.objectFit};
`;

const Image: React.FC<ImageProps> = ({ objectFit, src, alt }) => {
  return <StyledImage objectFit={objectFit} src={src} alt={alt}></StyledImage>;
};

export default Image;
