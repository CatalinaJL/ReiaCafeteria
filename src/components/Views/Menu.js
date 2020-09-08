import React, { useEffect, useState } from 'react';


function useMenu() {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('src/menu.json')
        .then(response => response.json())
        .then(datos => {
            setMenu(datos)
        })
    }, [])
    return menu;
};

export default function menu() {
    const Menu = useMenu();
    return (
        <div className="menuBox">
            <h3>Prueba de Muestra </h3>
            {Menu.map((menuDetail, index)=>
                 <div>
                    <h3>
                        {menuDetail.title}
                    </h3>
                    <p>
                        {menuDetail.valor}
                    </p>
                </div>
            )}         
        </div>  
    )
};