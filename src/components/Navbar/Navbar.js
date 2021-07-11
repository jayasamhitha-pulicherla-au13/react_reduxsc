import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Modal from "@material-ui/core/Modal";

import { connect } from "react-redux";

import Cart from "../Cart/Cart";
const Navbar = ({ cart }) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	const handleClose = () => {
		setOpen(false);
	};

	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;
		cart.forEach((item) => {
			count += item.qty;
		});

		setCartCount(count);
	}, [cart, cartCount]);

	return (
		<div className={styles.navbar}>
			<Link to="/">
				<h2 className={styles.navbar__logo}>React-Redux Shopping Cart</h2>
			</Link>
			<Link to="/cart" onClick={onOpenModal}>
				{/* <Modal open={open} onClose={onCloseModal} center></Modal> */}
				<div className={styles.navbar__cart}>
					<h3 className={styles.cart__title}>Cart</h3>
					<img
						className={styles.cart__image}
						src="https://image.flaticon.com/icons/svg/102/102276.svg"
						alt="shopping cart"
					/>
					<div className={styles.cart__counter}>{cartCount}</div>
				</div>
			</Link>
			<Modal className={styles.modal} open={open} onClose={handleClose}>
				<Cart data={handleClose} />
			</Modal>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Navbar);
