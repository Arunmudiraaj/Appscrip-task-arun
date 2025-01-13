import styles from './ProductCard.module.css';
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product?.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className={styles.image}
          unoptimized
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.message}>You need to sign in to see the price</p>
      </div>
    </div>
  );
};

export default ProductCard;
