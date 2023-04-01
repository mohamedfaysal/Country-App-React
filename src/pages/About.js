import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="about">
                <h1>A propos</h1>
                <br />
                <p className='about-paragraphe'>Application permettant de faire le tour de plusieurs pays du monde de différents continents. Au survol sur la carte de chacun de ces pays, on peut y lire son nom, sa capitale ainsi que le nombre de sa population. Sur la barre d'outils juste au dessus on peut selectionner le continent que l'on souhaite. L'application se chargera de trier et de renvoyer les pays qui se trouvent sur ce continent. Le bouton au coin à droite permet de faire vairer le nombre de pays qui seront affichés.</p>

            </div>

        </div>
    );
};

export default About;