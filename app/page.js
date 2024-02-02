"use Client"

import React from 'react';
import NavBarComponent from './components/NavBarComponent';
import BannerCarouselComponent from './components/BannerCarouselComponent';
import CategoriesComponent from './components/CategoriesComponent';
import SingleCollectionComponent from './components/MultipleCollectionsComponent';
import MultipleCollectionsComponent from './components/SingleCollectionComponent';


const Home = () => {
  return (
    <div>
      <NavBarComponent />
      <main className="flex flex-col items-center min-h-screen bg-white">
        <BannerCarouselComponent />
        <CategoriesComponent />
        <MultipleCollectionsComponent />
        <SingleCollectionComponent />
      </main>
    </div>
  );
};

export default Home;
