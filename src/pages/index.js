import React,{useRef} from 'react';
import Image from 'next/image';
import logo from '@logos/menu_Destored.png';
import styles from '@styles/Login.module.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event)=>{
		event.preventDefault();
		const formData  = new formData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);

	}
	return (
		<div className={styles.Login}>
				<Image src={logo} alt="logo" className={styles['img-portada']} />
				<form action="/" className={styles.form} ref={form}>
					<label htmlFor="email" className={styles.label}>Email</label>
					<input type="text" name="email" placeholder="destored@example.com.ar" className={styles.input} />
					<label htmlFor="password" className={styles.label}>Contraseña</label>
					<input type="password" name="password" placeholder="*********" className={styles.input} />
					<button 
						onClick={handleSubmit}
						className={styles['primary-button']} >
						Entrar
					</button>
					
					<a href="/" id="linkRecovery">Olvide mi contraseña</a>

					<button className={styles['signup-button']}>
					Crear Cuenta
				</button>
				</form>
				
			
		</div>
	);
}

export default Login;