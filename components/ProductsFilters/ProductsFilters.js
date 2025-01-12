"use client";
import { useEffect, useState } from "react";
import styles from "./ProductsFilters.module.css";
import CustomMultiSelector from "../CustomMultiselector/CustomMultiSelector";
import axios from "axios";
import { useRouter } from "next/navigation";

const allFilters = [
  {
    label: "Ideal For",
    options: ["Men", "Women", "Kids"],
    selected: [],
  },
  {
    label: "Occation",
    options: ["Party", "Casual", "Sports", "Travel"],
    selected: [],
  },
  {
    label: "Fabric",
    options: ["Silk", "Cotton", "Nylon"],
    selected: [],
  },
  {
    label: "Pattern",
    options: ["Printed", "Plain", "Checks", "Semi-Printed"],
    selected: [],
  },
];

const ProductsFilters = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState(allFilters);
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");

  const toggleFilters = () => setIsOpen((prev) => !prev);

  const filtersChangeHandler = (newFilter, filterLabel) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.label === filterLabel
          ? { ...filter, selected: newFilter }
          : filter
      )
    );
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setAllCategories(response?.data || []);
      } catch (error) {
        console.error(
          "Failed to fetch categories",
          error
        );
      }
    };

    getCategories();
  }, []);

  const categoryChangeHandler = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    if (newCategory) {
      router.push(`/?category=${newCategory}`);
    }
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.actions}>
        <div className={styles.highlightedText}>2345 ITEMS</div>
        <div className={styles.toggleFilterBtn} onClick={toggleFilters}>
          {isOpen ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
      </div>
      <select
        value={category}
        onChange={categoryChangeHandler}
        className={styles.selector}
        aria-label="Select Category"
      >
        {allCategories.map((ele) => (
          <option key={ele} value={ele} className={styles.option}>
            {ele}
          </option>
        ))}
      </select>
      <div
        className={`${styles.filters} ${isOpen ? "" : styles.filtersClose}`}
      >
        {filters.map((ele) => (
          <CustomMultiSelector
            key={ele.label}
            options={ele.options}
            selectedOptions={ele.selected}
            onChange={(newFilter) =>
              filtersChangeHandler(newFilter, ele.label)
            }
            label={ele.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsFilters;
