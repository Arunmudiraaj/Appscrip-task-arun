import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProductsFilters from "@/components/ProductsFilters/ProductsFilters";
import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios("https://fakestoreapi.com/products", {family:4});
    return response;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};


export default async function Home() {
  const products = await getProducts()
  console.log(products)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero/>
        <ProductsFilters/>
      </main>

      <footer >
      </footer>
    </div>
  );
}
