import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js"  //importing the menuApi.js file
import MenuCard from './MenuCard' //importing the menuCard.js file 
const Cafe = () => {
 const [menuData,]  = useState(Menu); //intialdata is the array of objects from the menuApi.js file
  //! pass attrtibute and value to the MenuCard component//  
 return (
        <>
        
        <nav className='navbar'>
<div className='btn-group'>
<button className='btn-group__item'>Breakfast</button>


</div>
        </nav>
          <MenuCard menuData={menuData}/>                 
        </>
    )
}

export default Cafe;
