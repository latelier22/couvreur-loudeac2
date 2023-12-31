import React from 'react';
import RootLayout from '../app/layout';
import Navbar from './NavBar';
import HeaderSimple from './headerSimple';
import Footer from './Footer';

const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = 'Accueil';
  const pageDescription = 'Description de la page d\'accueil';

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <HeaderSimple />
      <Footer />
    </RootLayout>
  );
};

export default Home;
