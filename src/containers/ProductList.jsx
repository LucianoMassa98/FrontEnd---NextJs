import React, {useContext} from 'react';

import AppContext from '@context/AppContext';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';
const API = 'https://api.escuelajs.co/api/v1/products'; 

const ProductList = () => {
	const {state} = useContext(AppContext);
	
	return (
		<section className={styles['main-container']}>
			
			<div className={styles.ProductList}>
				{ 
				state.list[0]?.map((product) =>{
				
					if(product.images.length > 0 && product.images[0] !== ''){
						return (
							<ProductItem product={product} key={product.id}/>
						)
					}
				} 
				)
				}
				
			</div>
		</section>
	);
}

export default ProductList;