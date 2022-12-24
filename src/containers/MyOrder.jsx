import React, {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';
const MyOrder = () => {
	const {state} = useContext(AppContext);

	const sumTotal = () =>{
		const reducer = (accumulator,currentValue) => accumulator + (currentValue.price*currentValue.cnt);
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}
	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<p className="title">My order</p>
			</div>
			<div className={styles['my-order-content']}>

				{state.cart.map(product =>(
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
					
				</div>
				

				<form className={styles.formCheckout}>
					<label className={styles.labelCheckout}>
					Cliente
					<input type="text" name='cliente' placeholder='Buscar cliente...' />
					</label>
					<button 
						className={styles['button-secondary']} 
						onClick={console.log('holis')}
					>Agregar</button>

					<label className={styles.labelCheckout}>
					Fecha Entrega
					<input type="date" name='fecha' />

					</label>
					<button className={styles['button-principal']} onClick={console.log('holis2')}>Finalizar venta </button>
				</form>
				

			</div>
		</aside>
	);
}

export default MyOrder;