// import React, { Component } from 'react';
import React from 'react';
import Logo from '../Elements/Logo.js';
import ButtonLink from '../Elements/Boton.js';
import Input from '../Elements/Input.js';
import showMenu from '../Views/Menu.js';
// import Menu from '../../menu.json';

// class Pedidos extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>Hola Hola!</h1>
//                 {Menu.map((menuDetail, index) =>{
//                     return <div>
//                         <h2>
//                             {menuDetail.title}
//                         </h2>
//                         <p>
//                             {menuDetail.valor}
//                         </p>
//                     </div>
//                 })}
//             </div>
//         )
//     }
// };







const Pedidos = () => {
    // const menu = data;
    // const firStepMenu = JSON.parse(menu); 

    // console.log(firStepMenu);

//     fetch('../../menu.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

    return (
        <div className="Orders">
            <Logo />
            <div className="navbar">
                <nav>
                    <a href="#/cafes"> Cafés </a>
                    <a href="#/pasteleria"> Pasteleria </a>
                    <a href="#/te"> Té </a>
                    <a href="#/sandwich"> Sandwich </a>
                </nav>
            </div>
            <div className="menuBox">
                <h1>Hola Hola! </h1>
                {/* {menu.map ((menuInfo,index) => {
                    return <div>
                        <h3>{menuInfo.title}</h3>
                        <p>{menuInfo.valor}</p>
                    </div>
                })} */}
            </div>
            <div className="pedidoBox">
                <p>Capuchino </p>
                <button>+</button>
                <button>-</button>
            </div>
            <div className="total pedido">
                <p>Total</p> <p>$1.500</p>
            </div>
            <div className="inputContainer">
                <Input />
                <Input />
            </div>
            <div className="BtnContainer">
                <ButtonLink
                    id="order"
                    title="Ordenar"
                    pageto="Cocina"
                />
            </div>
        </div>

    )
}

export default Pedidos;