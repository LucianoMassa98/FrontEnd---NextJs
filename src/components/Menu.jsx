import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';
const Menu = () => {
	return (
		<div className={styles.menu}>
		<ul>
		  <li>
			<a href="/">Ventas pendientes</a>
		  </li>
		  <li>
			
			<Link href="/Orders" sd={"12345"}>
			Ventas confirmadas
			</Link>
		  </li>
		  <li>
		  	<Link href="/MyAccount">
			Mi cuenta
			</Link>
			
		  </li>
	
		  <li>
			<a href="/">Cerrar sesión</a>
		  </li>
		</ul>
	  </div>
	);
}

export default Menu;