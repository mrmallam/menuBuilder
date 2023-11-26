import React from 'react';
import Header from '../components/header';
import Category from '../components/category';
import bgshw from '../resources/shwm.jpg'

function MenuBuilderHomePage() {
    return (
      <div className="App">
        <div className=' bg-black h-1/4'>
            <img src={bgshw} alt='Shawarma Rest Img'/>
        </div>
        <div>
          <h1 className=' flex justify-center align-middle text-3xl font-bold my-2'>
            Jerusalem Shawarma
          </h1>
        </div>
        <div className=' my-2 mx-auto flex align-middle justify-center w-3/4 h-24 border-2 container shadow-lg'> 
          <span className=' text-6xl'>
            +
          </span>
        </div>
      </div>
    );
  }
  
  export default MenuBuilderHomePage;
  