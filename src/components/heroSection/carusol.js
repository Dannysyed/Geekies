import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

let Carouselfn = () => {
    return (
        <Carousel>
            <div>
                <img src="https://static.bandainamcoent.eu/high/one-punch-man/one-punch-man-a-hero-nobody-knows/00-page-setup/opm_game-thumbnail.jpg" />

                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1570662725148-IAO6976RU4EBGLNZR3V3/seven_deadly_sins_wrath_gods-opening.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/07/The-Seven-Deadly-Sins.jpg' />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}
export default Carouselfn
