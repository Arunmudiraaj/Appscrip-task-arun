import { Suspense } from 'react';
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProductsFilters from "@/components/ProductsFilters/ProductsFilters";
import axios from "axios";
import { APIS } from "@/constants/constants";
import ProductCard from "@/components/ProductCard/ProductCard";

const getProducts = async (filters) => {
  try {
    const params = new URLSearchParams();
    if (filters?.category) params.append("category", filters.category);

    const response = await axios.get(`${APIS.FETCH_PRODUCTS}?${params.toString()}`, { family: 4 });
    return {error: null, products: response.data};
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    return { error: "Unable to fetch products at this time. Please try again later.", products: [] };
  }
};

export default async function Home({ searchParams }) {
  const params = await searchParams
  const productsResponse = await getProducts(params || {});
  const { products, error } = productsResponse;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Suspense>
          <ProductsFilters />
        </Suspense>
        <section className={styles.allProducts}>
          <Suspense fallback={<div>LOADING......</div>}>
          {error ? (
            <div className={styles.noData}>
              <h2>{error}</h2>
            </div>
          ) : products.length > 0 ? (
            products.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className={styles.noData}>
              <h2>No products to display</h2>
              <p>Try adjusting your filters or check back later.</p>
            </div>
          )}
          </Suspense>
        </section>
      </main>
    </div>
  );
}
