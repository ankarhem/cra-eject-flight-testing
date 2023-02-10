import { useQuery } from '@apollo/client';
import React from 'react';
import GetProducts from './GetProducts.graphql';

function ProductGrid() {
  const { loading, error, data } = useQuery(GetProducts, {
    variables: { first: 9 },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error :(</div>;
  }

  return (
    <ul className="grid grid-cols-3 gap-2">
      {data.products.edges.map((edge: any) => {
        const product = edge.node;
        return (
          <li className="grid gap-2">
            <img
              src={product.featuredImage.url}
              alt={product.title}
              className="h-40 w-40 object-contain"
            />
            <h2 className="text-xs">{product.title}</h2>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductGrid;
