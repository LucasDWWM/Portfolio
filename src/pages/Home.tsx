// src/pages/Home.tsx
import React from 'react';
import Layout from '../components/Layout'; // Importer le Layout

const Home: React.FC = () => {
  return (
    <Layout pageTitle="Mon Portfolio">
      <div className="text">
        <h2>Votre</h2>
        <h3>Développeur WEB</h3>
        <p>Bienvenue sur mon portfolio 👨‍💻 <br/>
          Je me présente Lipari Lucas , je suis actuellement en recherche de travail.<br/>
          Je suis <b>Passionné</b> , <b>Curieux</b> , <b>Motivé</b> ... JE SUIS <b>VOTRE</b> DEVELOPPEUR WEB</p>
        <a href="/pdf/EuroPass.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV </a>
      </div>
    </Layout>
  );
};
export default Home;
