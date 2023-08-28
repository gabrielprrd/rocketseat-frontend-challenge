import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState } from "react";

function getCategories(products: { category: string }[]): string[] {
  const categories = products.map((p) => p.category);
  return Array.from(new Set([...categories]));
}

export default function useCategories() {
  const [categories, setCategories] = useState<string[] | null>(null);

  const GET_CATEGORIES = gql`
    query Products {
      allProducts {
        category
      }
    }
  `;

  const {} = useQuery(GET_CATEGORIES, {
    onCompleted: (data) => {
      const uniqueCategories: string[] = getCategories(data.allProducts);
      setCategories(uniqueCategories);
    },
  });

  return {
    categories,
  };
}
