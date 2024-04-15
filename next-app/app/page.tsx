import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello from Page TSX</h1>
      <Link href={'/user'}>
        User&apos;s Page
      </Link>
      <ProductCard /> 
    </main>
  );
}
