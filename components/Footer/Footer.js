import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";


const Footer = () => {
  const links1 = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]
  const links2 = ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"]
  return (

    <footer className={`${styles.footer} ${styles.text}`}>
      <div className={styles.footerContainer}>
        <div className={styles.footerItems}>
          <div className={`${styles.footerItem} ${styles.subscribeContainer}`}>
            <div className={styles.boldText}>BE THE FIRST TO KNOW</div>
            <p>Sign up for updates from mettā muse.</p>
            <div className={styles.contactInputs}>
              <input />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.contactUs}>
              <div className={styles.colSpan}>
                <div className={styles.boldText}>CONTACT US</div>
                <div>+44 221 133 5360</div>
                <div>customercare@mettamuse.com</div>
              </div>
              <div className={styles.colSpan}>
                <div className={styles.boldText}>CURRENCY</div>
                <div>USD</div>
                <div>Transactions will be completed in Euros and a currency reference is available on hover.</div>
              </div>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.colSpan}>
              <div className={styles.boldText}>metta muse</div>
              {links1.map(ele => <div className={styles.link}>{ele}</div>)}

            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.colSpan}>
              <div className={styles.boldText}>QUICK LINKS</div>
              {links2.map(ele => <div className={styles.link}>{ele}</div>)}

            </div>
          </div>
          <div className={styles.footerItem}>
          <div className={styles.colSpan}>
              <div className={styles.boldText}>FOLLOW US</div>
              <div className={styles.socialIcons}>
                <FaInstagram className={styles.link} size={30}/>
                <FaLinkedin className={styles.link} size={30}/>
              </div>
            </div>
            <div className={styles.colSpan}>
              <div className={styles.boldText}>mettā muse Accepts</div>
              <div className={styles.socialIcons}>
                <FaGooglePay className={styles.link} size={30}/>
                <FaCcMastercard className={styles.link} size={30}/>
                <FaPaypal className={styles.link} size={30}/>
                <FaCcAmex className={styles.link} size={30}/>
                <FaApplePay className={styles.link} size={30}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
