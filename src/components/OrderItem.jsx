import React ,{useContext}from 'react';
import Image from 'next/image';
import OrderItemForm from '@components/OrderItemForm';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product}) => {

	
	const {updateToCart,removeToCart} = useContext(AppContext);

    const handleChangePrice = (event)=> {
	  product.price = event.target.value;
	  updateToCart(product);
    }
	const handleChangeCnt = (event)=> {
		product.cnt = event.target.value;
		updateToCart(product);
	  }
    const handleRemove = ()=> {
      removeToCart(product);
    }
	
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image loader={() => product?.images[0]} src={product?.images[0]} alt={product?.title} width="100" height="100" />
			</figure>
			
			<p>{product?.title}</p>
			<form className={styles['form-oder-item']}>
					<label className={styles['form-itemOrder']}>
						cnt
						<input
						type="number"
						placeholder={product?.cnt} 
						onChange={handleChangeCnt}
						className={styles['input-cnt']}
						/>
					</label>

					<label className={styles['form-itemOrder']}>
						precio
						<input 
						type="number" 
						placeholder={product?.price} 
						onChange={handleChangePrice}
						className={styles['input-price']}
						/>
					</label>
					
         	</form>
			 <div className={styles['img-close']}>
				<Image  src={close} alt="close" onClick={()=>handleRemove()}/>
			 </div>

		</div>
	);
}

export default OrderItem;