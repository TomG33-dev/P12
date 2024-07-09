import React from 'react';
import "./projets.scss";
import sophieBluelImage from '../../assets/sophiebluel.png';
import ninaCarducciImage from '../../assets/ninacarducci.png';
import argentBankImage from '../../assets/argentbank.png';

const projetsData = [
    {
        titre: "SOPHIE BLUEL",
        description: "Créez une page web dynamique avec JavaScript, nous avons du utiliser une API pour récupérer des données et les afficher sur la page.",
        image: sophieBluelImage,
        repoLink: "https://github.com/TomG33-dev/P6-OC"
    },
    {
        titre: "NINA CARDUCCI",
        description: "Optimisez le référencement d'un site de photographe, nous avons du optimiser le SEO du site.",
        image: ninaCarducciImage,
        repoLink: "https://github.com/TomG33-dev/P9"
    },
    {
        titre: "ARGENT BANK",
        description: "Implémentez le front-end d'une application bancaire avec React, nous avons du créer un site web pour une banque en ligne avec React et Redux.",
        image: argentBankImage,
        repoLink: "https://github.com/TomG33-dev/P11"
    },
];

function Projets() {
    return (
        <div id="projets" className="projets">
            <h1>PROJETS OPENCLASSROOMS</h1>
            {projetsData.map((projet, index) => (
                <div key={index} className="project">
                    <div className="project-text">
                        <h2>{projet.titre}</h2>
                        <p>{projet.description}</p>
                        <a href={projet.repoLink} target="_blank" rel="noopener noreferrer">
                            <button><i className="devicon-github-original"></i></button>
                        </a>
                    </div>
                    <img src={projet.image} alt={`Image du site de ${projet.titre}`} />
                </div>
            ))}
        </div>
    );
}

export default Projets;