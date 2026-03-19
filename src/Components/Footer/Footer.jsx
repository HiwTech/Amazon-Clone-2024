import React, { useState } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

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
              <li>Newsletter</li>
              <li>About us</li>
            </ul>
          </div>
          <div>
            <p>Make money with us</p>
            <ul className={classes.footer_ul}>
              <li>Sell more </li>
              <li>Supply </li>
              <li>Become an Affiliate</li>
            </ul>
          </div>
          <div>
            <p>Payment Products</p>
            <ul className={classes.footer_ul}>
              <li>Visa</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div>
            <p>Let Us Help You</p>
            <ul className={classes.footer_ul}>
              <li>Your Account</li>
              <li>Your Order</li>
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

export default Footer;
