import React,{useState,useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import flechita from '@icons/flechita.svg';
import useGetProducts from '@hooks/useGetProducts';

import  styles from '@styles/Filter.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products'; 

const Filter = () => {
	
	const { addListProducts, stateListProduct } = useContext(AppContext);
	

	
	const products = useGetProducts(API);
	if((stateListProduct == 0) && (products.length>0)){
		addListProducts(products);
		console.log("");
	}
	 
	
	const searchForName = (dat) =>{
		let array = [];
		if(dat==""){
			array = products;
		}else{
			let findProduct = dat.toLowerCase();
			for(let i =0; i<products.length;i++){
				let nomProduct = products[i].title.toLowerCase();
				if(nomProduct.indexOf(findProduct)!==-1){
					array.push( products[i]);
				}
			
			}}
		
		addListProducts(array);
	}

	
	
	
	return (
		<nav className={styles.Filter}>
			
			<div className={styles['filterbar-left']}>
				<p className={styles['filterbar-menu']} >Filtrar</p>

				<Image src={flechita} alt="flechita" className={styles['filter-flechita']} />
					
			</div>
			<div className={styles['filterbar-right']}>
			<form>
				<input type="text"
				 className={styles['input-filter']}
				 autoComplete='false'
				 placeholder='Buscar producto...'
				 onChange={ev =>searchForName(ev.target.value)} 
				 />
			
			</form>
			</div>
			
		</nav>

		
	);
}

export default Filter;