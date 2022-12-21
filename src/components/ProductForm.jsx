import React,{useState,useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import flechita from '@icons/flechita.svg';
import useGetProducts from '@hooks/useGetProducts';

import  styles from '@styles/Filter.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products'; 

const ProductForm = () => {
	
	const { addListProducts } = useContext(AppContext);
	const [toggle,setToggle] = useState(false);
	const handleToggle=()=>{
		setToggle(!toggle);
	}
	const products = useGetProducts(API);
	addListProducts(products);
	
	return (
		<nav className={styles.Filter}>
			
			<div className={styles['filterbar-left']}>
				
				<Image src={flechita} alt="flechita" className={styles['filter-flechita']} />
				<p className={styles['filterbar-menu']} onClick={handleToggle}>
						Filtrar
					</p>
					{toggle ? <Menu />: null}
			</div>
			<div className={styles['filterbar-right']}>
			
			</div>

		</nav>
	);
}

export default Filter;