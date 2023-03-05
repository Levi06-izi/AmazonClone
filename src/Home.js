import React from "react";
import "./Home.css";
import Product from "./Product";
import aot from './Imagees/aot2.jpeg'

function Home() {
  return (
  <div className="home">
    <div className="home__container">
        <img className="home__image" src={aot}/>

        <div className="home__row">
          <Product
            id="1"
            title="Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free"
            image="https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg"
            price={2000}
            rating={5}
          />
          <Product
            id="2"
            title="Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free"
            image="https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg"
            price="$19.99"
            rating={5}
          />
        </div>

        <div className="home__row">
        <Product
            id="3"
            title="Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free"
            image="https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg"
            price="$19.99"
            rating={5}
          />
          <Product
            id="4"
            title="Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free"
            image="https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg"
            price="$19.99"
            rating={5}
          />
          <Product
            id="5"
            title="Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free"
            image="https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg"
            price="$19.99"
            rating={5}
          />
        </div>
        <div className="home__row">
        <Product
            id="6"
            title="Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free"
            image="https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg"
            price="$19.99"
            rating={5}
          />
        </div>
    </div>
  </div>
  );
}

export default Home;
