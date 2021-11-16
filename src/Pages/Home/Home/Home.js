import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import Reviews from '../Reviews/Reviews/Reviews';
import Deal from '../Deal/Deal';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
      <div>
           <Navigation></Navigation>
           <Header></Header>
           <Services></Services>
           <Products></Products>
           <Deal></Deal>
           <Blogs></Blogs>
           <Reviews></Reviews>
           
      </div>
    );
};

export default Home;