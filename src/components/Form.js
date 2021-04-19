import React, { useState } from "react";

const Form = (props) => {
  const { submit } = props;
  const initialFormData = {
    size: "",
    sauce: "",
    toppings: {
      pepperoni: false,
      pineapple: false,
      olives: false,
      bacon: false,
      sausage: false,
      hamburger: false,
      chicken: false,
      cheddar: false,
      mozzarella: false,
      sardines: false,
      mushrooms: false,
      onions: false,
      peppers: false,
      ham: false,
    },
    glutenFree: false,
    specialInstructions: "",
    name: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const val = value ? value : checked;
    setFormData({ ...formData, [name]: val });
  };
  const handleToppings = (e) => {
    const { name, checked } = e.target;
    const selectedToppings = { ...formData.toppings, [name]: checked };
    const newFormData = { ...formData };
    newFormData.toppings = selectedToppings;
    setFormData(newFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData };
    const toppingsArray = [];
    for (const p in formData.toppings) {
      if (formData.toppings[p]) {
        toppingsArray.push(p);
      } // push all properties with value == true into toppingsArray
    }
    dataToSubmit.toppings = toppingsArray;
    submit(dataToSubmit);
    setFormData(initialFormData);
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "baseline",
        width: "clamp(400px, 35vw, 800px)",
      }}
      action="submit"
      onSubmit={handleSubmit}
    >
      {/* size dropdown */}
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="sizeWrapper"
      >
        <label htmlFor="size">Choice of Size</label>
        <small>required</small>
        <select name="size" id="size" onChange={handleChange}>
          <option value={null}>Select a size</option>
          <option value="sm">Small - 8"</option>
          <option value="md">Medium - 12"</option>
          <option value="lg">Large - 14"</option>
          <option value="xl">Super - 18"</option>
        </select>
      </div>
      {/* radio buttons */}
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "baseline",
        }}
        className="radioWrapper"
      >
        <div className="radio">
          <input
            onChange={handleChange}
            type="radio"
            name="sauce"
            value="marinara"
            checked={formData.sauce === "marinara"}
          />
          <label htmlFor="marinara">Marinara</label>
        </div>
        <div className="radio">
          <input
            onChange={handleChange}
            type="radio"
            name="sauce"
            value="alfredo"
            checked={formData.sauce === "alfredo"}
          />
          <label htmlFor="alfredo">Alfredo</label>
        </div>
        <div className="radio">
          <input
            onChange={handleChange}
            type="radio"
            name="sauce"
            value="garlic"
            checked={formData.sauce === "garlic"}
          />
          <label htmlFor="garlic">Garlic Sauce</label>
        </div>
        <div className="radio">
          <input
            onChange={handleChange}
            type="radio"
            name="sauce"
            value="blackbean"
            checked={formData.sauce === "blackbean"}
          />
          <label htmlFor="blackbean">Black Bean Paste</label>
        </div>
        <div className="radio">
          <input
            onChange={handleChange}
            type="radio"
            name="sauce"
            value="barbecue"
            checked={formData.sauce === "barbecue"}
          />
          <label htmlFor="barbecue">Tangy Barbecue</label>
        </div>
      </div>
      {/* toppings checkboxes */}
      <div style={{ display: "flex" }} className="toppingsWrapper">
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="col"
        >
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="pepperoni"
              checked={formData.toppings.pepperoni}
              onChange={handleToppings}
            />
            <label htmlFor="pepperoni">Pepperoni</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="pineapple"
              checked={formData.toppings.pineapple}
              onChange={handleToppings}
            />
            <label htmlFor="pineapple">Pineapple</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="olives"
              checked={formData.toppings.olives}
              onChange={handleToppings}
            />
            <label htmlFor="olives">Olives</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="bacon"
              checked={formData.toppings.bacon}
              onChange={handleToppings}
            />
            <label htmlFor="bacon">Bacon</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="sausage"
              checked={formData.toppings.sausage}
              onChange={handleToppings}
            />
            <label htmlFor="sausage">Sausage</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="hamburger"
              checked={formData.toppings.hamburger}
              onChange={handleToppings}
            />
            <label htmlFor="hamburger">Hamburger</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="chicken"
              checked={formData.toppings.chicken}
              onChange={handleToppings}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="col"
        >
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="cheddar"
              checked={formData.toppings.cheddar}
              onChange={handleToppings}
            />
            <label htmlFor="cheddar">Cheddar</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="mozzarella"
              checked={formData.toppings.mozzarella}
              onChange={handleToppings}
            />
            <label htmlFor="mozzarella">Mozzarella</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="sardines"
              checked={formData.toppings.sardines}
              onChange={handleToppings}
            />
            <label htmlFor="sardines">Sardines</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="mushrooms"
              checked={formData.toppings.mushrooms}
              onChange={handleToppings}
            />
            <label htmlFor="mushrooms">Mushrooms</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="onions"
              checked={formData.toppings.onions}
              onChange={handleToppings}
            />
            <label htmlFor="onions">Onions</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="peppers"
              checked={formData.toppings.peppers}
              onChange={handleToppings}
            />
            <label htmlFor="peppers">Peppers</label>
          </div>
          <div className="toppingCheckBox">
            <input
              type="checkbox"
              name="ham"
              checked={formData.toppings.ham}
              onChange={handleToppings}
            />
            <label htmlFor="ham">Ham</label>
          </div>
        </div>
      </div>
      {/* gluten-free toggle */}
      <div className="glutenToggle">
        <input
          type="checkbox"
          name="glutenFree"
          checked={formData.glutenFree}
          onChange={handleChange}
        />
        <label htmlFor="glutenToggle">Gluten-Free Crust</label>
      </div>
      {/* special instructions */}
      <div className="instructions">
        <label htmlFor="instructions">Special Instructions</label>
        <textarea
          name="specialInstructions"
          id="instructions"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </div>
      <label htmlFor="name">Enter a name for your order</label>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      />
      <button type="submit">Make it so!</button>
    </form>
  );
};

export default Form;
