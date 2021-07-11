import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { clearCart } from "../../redux/Shopping/shopping-actions";
import { connect, useDispatch } from "react-redux";

import CartItem from "./CartItem/CartItem";
import { useHistory } from "react-router-dom";

const Cart = ({ cart, data }) => {
	const dispatch = useDispatch();
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const history = useHistory();
	console.log(data);
	useEffect(() => {
		let items = 0;
		let price = 0;

		cart.forEach((item) => {
			items += item.qty;
			price += item.qty * item.price;
		});

		setTotalItems(items);
		setTotalPrice(price);
	}, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
	const close = () => {
		dispatch(clearCart());
		data();
		history.push("/");
	};

	return (
		<div className={styles.cart}>
			<div className={styles.cart__items}>
				{cart.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<div className={styles.cart__summary}>
				<h4 className={styles.summary__title}>Cart Summary</h4>
				<div className={styles.summary__price}>
					<span>TOTAL: ({totalItems} items)</span>
					<span>$ {totalPrice}</span>
				</div>
				<button onClick={close} className={styles.summary__checkoutBtn}>
					Proceed To Checkout
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state, dispatch) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Cart);
