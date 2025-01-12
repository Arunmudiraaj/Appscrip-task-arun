"use client"
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import styles from './CustomMultiSelector.module.css'

const CustomMultiSelector = ({ options = [], selectedOptions = [], onChange, label = "Select" }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(pre => !pre)
  const optionClickHandler = (option) => {
    const isSelected = selectedOptions.includes(option);
    const newSelectedList = isSelected ? selectedOptions.filter(ele => ele !== option) : [...selectedOptions, option]
    if (onChange) onChange(newSelectedList, label);
  }

  return (
    <div>
      <div className={styles.multiselector} onClick={toggleExpand}>
        <div className={styles.titleContainer}>
          <div className={styles.label}>{label}</div>
          <FaAngleDown className={`${styles.arrow} ${isExpanded && styles.arrowExpand}`} />
        </div>
        {!isExpanded && <div className={styles.valuePreview}>{selectedOptions.join(", ")}</div>}
      </div>
      {isExpanded &&
        <div className={styles.options}>
          {options.map(option =>
            <label key={option} className={styles.option}>
              <input checked={selectedOptions.includes(option)} onChange={e => optionClickHandler(option, e)} type='checkbox' />
              <span>{option}</span>
            </label>
          )}
        </div>}
    </div>

  )
}

export default CustomMultiSelector