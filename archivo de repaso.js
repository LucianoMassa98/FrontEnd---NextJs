
// tipos de componenentes de react
import React,{ useState } from 'react';

//Stateful
//Este tipo de componente nos permitirá mantener estados
// manejan un estado dentro del componente y van hacer ciertas particularidades
//ejemplo:
const Button=()=>{
    //asignar informacion o en la parte superior es donde va a tener logica
    // asignar una constante con nuestros hooks 
    const [name,setName] = useState('Hola Mundo');
    
    // setName podria cambiarlo para que cumpla la fu 

    return (
        // dentro del return utilizare jsx , un ejmplo:
        <div>
            
            <h1>{name}</h1>
            {/*mas adelante podria cambiar name por  la funcion SetName,
             con alguna funcion de un click u otros elementos*/}

        </div>
    );
}


//stateless
// es una forma presentacional de la estructura
// eliminamos las hable vars  y el return para que directamente sea expuesto
const Button=({text})=> <ButtonRed  text={text} />;

const Button=()=> <ButtonRed/>;

const Button=()=> (
    <div>
        <h1>{name}</h1>
    </div>
);

//Clase
//Hooks (orden superior)

