// Inline styles used for placeholder styling - to be replaced with styled components
import React from "react";
import { Link } from "react-router-dom";

const sampleImg = require("../assets/sampleImg.png");
const pizzaImg = require("../assets/Pizza.jpg");

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
    <div style={{ display: "flex" }} className="cta">
      <span
        style={{
          marginRight: "2em",
          border: "1px solid black",
          borderRadius: "3px",
          padding: "3px",
        }}
      >
        distance
      </span>
      <span
        style={{
          marginRight: "2em",
          border: "1px solid black",
          borderRadius: "3px",
          padding: "3px",
        }}
      >
        delivery fee
      </span>
    </div>
  </div>
);

const Home = (props) => {
  return (
    <div id="home">
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ marginLeft: "2em" }}>Lambda Eats</h1>
        <nav>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <li
              style={{
                padding: "3px 5px",
                marginRight: "1em",
                border: "1px solid black",
                borderRadius: "3px",
              }}
            >
              Home
            </li>
            <li
              style={{
                padding: "3px 5px",
                marginRight: "1em",
                border: "1px solid black",
                borderRadius: "3px",
              }}
            >
              Help
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          width: "100%",
          height: "clamp(200px, 40vh, 600px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${pizzaImg})`,
        }}
        className="banner"
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="overlay"
        >
          <p style={{ color: "white" }}>
            Your favorite food, delivered while coding
          </p>
          <Link
            style={{
              border: "1px solid black",
              borderRadius: "3px",
              padding: "8px",
              textDecoration: "none",
              color: "black",
            }}
            to="/pizza"
          >
            Pizza?
          </Link>
        </div>
      </div>
      <main>
        <h2 style={{ marginLeft: "2em" }}>Food Delivery in Gotham City</h2>
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
