type Product = {
  id: number;
  name: string;
};

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default ProductList;
