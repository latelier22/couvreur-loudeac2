import React from 'react';
import Link from 'next/link';
import RootLayout from '../app/layout';
import Navbar from './NavBar';
import HeaderSimple from './headerSimple';
import Footer from './Footer';

const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = 'Accueil';
  const pageDescription = 'Bienvenue sur le site de PRO COUVERTURE LOUDEAC';

  // Liste globale des actions avec les liens vers les pages correspondantes
  const globalActions = [
    {
      label: 'Réparation des toitures, remplacement des tuiles, ardoises, tôles.',
      link: '/reparation',
    },
    {
      label: 'Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.',
      link: '/entretien',
    },
    {
      label: 'Intervention 7/7 J - 24/24h en cas d&apos;urgences ou fuites de votre toiture. Pose de bâche en urgence, mise hors d&apos;eau, remplacement des tuiles, ardoises.',
      link: '/fuite',
    },
    {
      label: 'Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.',
      link: '/travaux-divers',
    },
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
    
  
      <section className="container mx-auto mt-96 p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mt-64 mb-4">ATTENTION ! A EVITER !!</h1>

        <p className="text-lg mb-4"> Le site est fermé car M. MIQUEL ne paie pas ses factures.... </p>
    </section>
        
    </RootLayout>
  );
};

export default Home;
