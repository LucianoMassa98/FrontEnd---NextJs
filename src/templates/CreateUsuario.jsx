import React from 'react';
import '@styles/CreateAccount.scss';

const CreateUsuario = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<input type="text" id="name" placeholder="Teff" className="input input-name" />
						<label for="cel" className="label">Celular</label>
						<input type="text" id="cel" placeholder="264-XXXX-XXX" className="input input-name" />
						
						<label for="dir" className="label">Celular</label>
						<input type="text" id="dir" placeholder="link maps " className="input input-name" />
						
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
						<label for="password" className="label">Contraseña</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateUsuario;