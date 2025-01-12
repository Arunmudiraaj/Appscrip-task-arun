"use client"
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { GoNorthStar } from "react-icons/go";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuArrowLeft } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { routes } from '@/constants/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const pathName = usePathname()
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMain}>
        <div className={styles.hamburgerContainer}>
          <RxHamburgerMenu className={`${styles.hamburger} ${styles.actionIcons}`} onClick={openMenu}/>
          <GoNorthStar  className={styles.actionIcons}/>
        </div>
        <div className={styles.logo}>
          LOGO
        </div>
        <div className={styles.actions}>
          <li> <CiSearch className={styles.actionIcons} /> </li>
          <li> <CiHeart className={styles.actionIcons} /> </li>
          <li> <CiShoppingCart className={styles.actionIcons} /> </li>
          <li> <CiUser className={styles.actionIcons} /> </li>
        </div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? '' : styles.navbarClose}`}>
        {routes.map(ele=><li key={ele.key}><Link onClick={closeMenu} href={ele.route} className={`${pathName===ele.route ? styles.activeLink : ''}`}>{ele.name}</Link></li>)}
        <LuArrowLeft onClick={closeMenu} className={styles.leftArrow}/>
      </ul>
    </nav>
  );
};

export default Navbar;
