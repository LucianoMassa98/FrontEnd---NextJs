import { useState } from "react";

const initialState = {
	cart: [],
	list:[]
	
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const removeToCart =(payload)=>{
		setState({
			...state,
			cart: state.cart.filter(items => items.id != payload.id)
		});
	}
	const addListProducts = (payload) => {
		
		setState({
			...state,
			list: [payload]
		});
	};
	const removeListProducts =(payload)=>{
		setState({
			...state,
			list: state.list.filter(items => items.id != payload.id)
		});
	}

	return {
		state,
		addToCart,
		removeToCart,
		addListProducts,
		removeListProducts
	}
}

export default useInitialState;