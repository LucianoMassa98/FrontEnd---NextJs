import React,{useState,useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import flechita from '@icons/flechita.svg';
import useGetProducts from '@hooks/useGetProducts';

import  styles from '@styles/Filter.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products'; 

const Filter = () => {
	
	const { addListProducts } = useContext(AppContext);
	

	
	const products = useGetProducts(API);
	
	const handleToggle=()=>{
		addListProducts(products);
	}
	
	const searchForName = (dat) =>{
		let array = [];
		let findProduct = dat.toLowerCase();
		for(let i =0; i<products.length;i++){
			let nomProduct = products[i].title.toLowerCase();
			if(nomProduct.indexOf(findProduct)!==-1){
				array.push( products[i]);
			}
		
		}
		addListProducts(array);
	}

	
	return (
		<nav className={styles.Filter}>
			
			<div className={styles['filterbar-left']}>
				<p className={styles['filterbar-menu']} onClick={handleToggle}>Filtrar</p>

				<Image src={flechita} alt="flechita" className={styles['filter-flechita']} />
					
			</div>
			<div className={styles['filterbar-right']}>
			<form>
				<input type="text"
				 className={styles['input-filter']}
				 autoComplete='false'
				 placeholder='Buscar producto...'
				 onChange={ev =>searchForName(ev.target.value)} />
			</form>
			</div>

		</nav>
	);
}

export default Filter;