
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import React, {useContext} from 'react'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/actiontype';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



function Cart() {

  const [{basket, user}, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item)=>{
     return item.price * item.amount + amount

  },0)

  const totalNoOfItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);



  const increase =(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item 
    })
  }
  const decrease = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  //console.log(basket)

  
  
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Items in the cart : {totalNoOfItem}</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.product_cart}>
                  <ProductCard
                    product={item}
                    renderDescription={true}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increase(item)}
                    >
                      <IoIosArrowUp size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrease(item.id)}
                    >
                      <IoIosArrowDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <br />
              <br />
              <p>Subtotal ({totalNoOfItem} ) items</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart