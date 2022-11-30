import React,{useState,useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder.jsx';
import flechita from '@icons/flechita.svg';
import  styles from '@styles/Filter.module.scss';

const Filter = () => {

	const [toggle,setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state}=useContext(AppContext);
	const handleToggle=()=>{
		setToggle(!toggle);
	}
	return (
		<nav className={styles.Filter}>
			
			<div className={styles['filterbar-left']}>
				
				<Image src={flechita} alt="flechita" className={styles['filter-flechita']} />
				
			</div>
			<div className={styles['filterbar-right']}>
				<input className={styles['input-filter']} placeholder="Buscar producto..."/>
			</div>
		</nav>
	);
}

export default Filter;