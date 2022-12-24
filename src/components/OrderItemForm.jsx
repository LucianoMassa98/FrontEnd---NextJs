
import React ,{useContext}from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItemForm.module.scss';

const OrderItemForm = ({product})=> {

    const {updateToCart,removeToCart} = useContext(AppContext);

    const handleChange = (event)=> {
      console.log(event.target.value);
    }
    const handleSubmit = (event)=>{
        console.log(event.target.value);
    }
    const handleRemove = ()=> {
      removeToCart(product);
    }
    return (
        <form className={style['form-oder-item']}>
          <label className={styles['form-itemOrder']}>
            cnt
            <input
              type="number"
              placeholder={product.cnt} 
              onChange={handleChange}
              className={styles['input-cnt']}
               />
          </label>

          <label className={styles['form-itemOrder']}>
            precio $
            <input 
              type="number" 
              placeholder={product.price} 
              onChange={handleChange}
              className={styles['input-price']}
              />
          </label>

          <Image src={close} alt="close" onClick={()=>handleRemove()}/>

        </form>
      );
    
  }

  export default OrderItemForm;