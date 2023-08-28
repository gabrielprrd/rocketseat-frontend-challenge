import Image from "next/image";
import styled from "styled-components";

export const ProductCardImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ProductCardImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.6em;
  border-top-right-radius: 0.6em;
`;
