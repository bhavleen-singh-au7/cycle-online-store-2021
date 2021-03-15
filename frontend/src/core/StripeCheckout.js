import { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";

const StripeCheckout = ({
  products,
  setRelaod = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token =
    isAuthenticated() && isAuthenticated().token;
  const userId =
    isAuthenticated() && isAuthenticated().user._id;

  const getFinalPrice = () => {
    let price = 0;
    products.map((p) => {
      price = price + p.price;
    });
    return price;
  };

  const showStripeButton = () => {
    return isAuthenticated() ? (
      <button className="btn btn-success">
        Pay with Stripe
      </button>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">Sign In</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className="text-white">
        Stripe Checkout {getFinalPrice()}
      </h3>
      {showStripeButton()}
    </div>
  );
};

export default StripeCheckout;
