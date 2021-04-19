import React from "react";

const sampleImg = require("../assets/sampleImg.png");
const SampleListing = (props) => (
  <div
    style={{
      border: "1px solid black",
      borderRadius: "12px",
      width: "400px",
      padding: "12px",
      margin: "1em",
    }}
    className="shop"
  >
    <img
      style={{
        height: "200px",
      }}
      src={sampleImg}
      alt="placeholder"
    />
    <h3>{props.name}</h3>
    <p>{props.text}</p>
  </div>
);

const Home = (props) => {
  return (
    <div id="home">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Help</li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="banner"
      >
        <p>Banner goes here</p>
      </div>
      <main>
        <h2>Food Delivery in Gotham City</h2>
        <div style={{ display: "flex" }} className="shopList">
          <SampleListing
            name="Jimmy's"
            text="Chicken so good it'll make you slap yo mama!"
          />
          <SampleListing
            name="Wok in Closet"
            text="Second-hand shop and house of stir-fry"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
