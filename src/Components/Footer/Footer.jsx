import React, {useState} from 'react'
import classes from "./Footer.module.css"
import { Link } from "react-router-dom";

function Footer() {
const[isVisible, setIsVisible] = useState(false);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  setIsVisible(scrollTop > 0);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Add smooth scrolling behavior
  });
};

// Attach scroll event listener
React.useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <section className={classes.container}>
      <div className={classes.footer_top}>
        {isVisible && (
          <Link
            to="#"
            className={classes.back_to_top}
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
          >
            Back to top
          </Link>
        )}
      </div>
      <section className={classes.footer_inner_container}>
        <div className={classes.footer_container}>
          <div>
            <p> Get to Know Us</p>
            <ul className={classes.footer_ul}>
              <li>Careers</li>
              <li>Amazon Newsletter</li>
              <li>About Amazon</li>
              <li>Accessibility</li>
              <li>Sustaniability</li>
              <li>Press Centre</li>
              <li>Amazon Devise</li>
            </ul>
          </div>
          <div>
            <p>Make money with us</p>
            <ul className={classes.footer_ul}>
              <li>Sell more with Amazon</li>
              <li>Sell apps on Amazon</li>
              <li>Supply with Amazon</li>
              <li>Become an Affiliate</li>
              <li>Become a Deliver Driver</li>
              <li>Advertise Your Products</li>
              <li>Start a Package Deliver Business</li>
              <li>Self Publish with US</li>
              <li>Host an Amazon Hub</li>
            </ul>
          </div>
          <div>
            <p>Amazon Payment Products</p>
            <ul className={classes.footer_ul}>
              <li>Amazon Visa</li>
              <li>Amazon Store Card</li>
              <li>Amazon Secure Card</li>
              <li>Amazon Business Card</li>
              <li>Shop points</li>
              <li>Credit Card Marketplace</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div>
            <p>Let Us Help You</p>
            <ul className={classes.footer_ul}>
              <li>Your Account</li>
              <li>Your Order</li>
              <li>Amazon Prime</li>
              <li>Returns & Replacements</li>
              <li>Shipping Rates & Polices</li>
              <li>Manage Your Content and Devices</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <hr />
      </section>
    </section>
  );
}

export default Footer