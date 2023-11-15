import React from 'react';
import Header from '../components/header';
import Category from '../components/category';

function MenuBuilderHomePage() {
    return (
      <div className="App">
        {/* Nav */}
        <Header />
        {/* Category */}
        <Category />
        {/* Create Category Button */}
        <button>Create Category</button>
      </div>
    );
  }
  
  export default MenuBuilderHomePage;
  