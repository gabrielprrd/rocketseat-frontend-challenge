import { devices } from "@/theme/constants";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  @media ${devices.md} {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: var(--dark-gray);
`;

export const ProductCategory = styled(Link)`
  text-decoration: none;
  color: var(--dark-gray);

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductName = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  line-height: 150%;
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  color: black;
  font-weight: 600;
  line-height: 150%;
`;

export const ShippingMessage = styled.p`
  font-size: 0.9rem;
  line-height: 150%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductDescriptionTitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  line-height: 150%;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  line-height: 150%;
`;
