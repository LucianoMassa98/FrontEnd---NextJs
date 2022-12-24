import React,{useState,useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder.jsx';
import Menu from '@components/Menu.jsx';
import menu from '@icons/icon_menu.svg';
import logo from '@icons/logo_destored.png';
import shopingcart from '@icons/icono_carrito.png';
import  styles from '@styles/Header.module.scss';
const Header = () => {

	const [toggle,setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	
	const {state}=useContext(AppContext);
	const handleToggle=()=>{
		setToggle(!toggle);
	}

	return (
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu} onClick={()=>setToggle(!toggle)}/>
			<div className={styles['navbar-left']}>
				<Link href="/">
				<Image src={logo} alt="logo" className={styles['nav-logo']} />
				</Link>
				<ul>
					<li>
						<a href="/">Compra</a>
					</li>
					<li>
						<a href="/">Venta</a>
					</li>
					<li>
						<a href="/">Pago</a>
					</li>
					<li>
						<a href="/">Deposito</a>
					</li>
					<li>
						<a href="/">Entrega</a>
					</li>
					<li>
						<a href="/">Mas</a>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<li className={styles['navbar-user']} onClick={handleToggle}>
						destored@example.com
					</li>
					<li className={styles['navbar-shopping-cart']} 
						onClick={()=>setToggleOrders(!toggleOrders)}>
						<Image src={shopingcart} alt={styles.shopingcart} />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu />: null}
			{toggleOrders ? <MyOrder />: null}
		</nav>
	);
}

export default Header;