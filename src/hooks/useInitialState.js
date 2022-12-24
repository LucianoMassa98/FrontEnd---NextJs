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
	const updateToCart = (payload)=>{
		for(let i = 0; i<state.cart.length;i++){
			if(payload.id===state.cart.id){
				state.cart[i]=payload;
			}
		}
		console.log(state.cart);
		
		setState(
			{
			...state,
			cart:[...state.cart]
			}
		);
	}
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

	const stateListProduct = state.list.length;
	
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
		removeListProducts,
		updateToCart,
		stateListProduct
	}
}

export default useInitialState;