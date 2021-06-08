import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import "./WelcomeSection";

function Cards() {
  return (
    <div className="cards" id="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/canyon.jpg"
              text="Explore the Charyn canyon on the Sharyn River in Kazakhstan"
              label="Adventure"
            />
            <CardItem
              src="/images/burabay.jpg"
              text="Travel through the island of Burabay in Aqmola Region"
              label="Luxury"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/boszhira.jpg"
              text="The amazing valley of Boszhira in Western Kazakhstan"
              label="Adventure"
            />
            <CardItem
              src="/images/bao.jpg"
              text="Big Almaty Lake is a natural reservoir perched high in the Ili Alatau mountains"
              label="Adventure"
            />
            <CardItem
              src="/images/kaiyndy.jpg"
              text="Kaindy Lake Is a Ghostly Underwater Forest"
              label="Adventure"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
