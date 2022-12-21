import React from 'react';
import OrderItem from '@components/OrderItem';
import Menu from '@components/Menu';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
	return (
		<div className={styles.Checkout}>
			<div className={styles['Checkout-container']}>
				<h1 className={styles.title}>My order</h1>
				<div className={styles['Checkout-content']}>
					<div className={styles.order}>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
				<form className={styles.formCheckout}>
				<input type="text" name='cliente' placeholder='Buscar cliente...' />
				<button className={styles['button-secondary']} onClick={console.log('holis')}>Agregar </button>
				<input type="date" name='fecha' />
				<button className={styles['button-principal']} onClick={console.log('holis2')}>Finalizar venta </button>

			</form>
			</div>
			
		</div>
	);
}

export default Checkout;