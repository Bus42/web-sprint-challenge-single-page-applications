import React, { useState } from "react";

const Form = (props) => {
  const initialFormData = {
    size: "",
    sauce: "",
    toppings: [],
    glutenFree: false,
    specialInstructions: "",
    quantity: 1,
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
      const {name, value, checked} = e.target;
      const val = value ? value : checked;
      setFormData({...formData, [name]: val})
  }
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "baseline",
        width: 'clamp(400px, 35vw, 800px)'
      }}
      action="submit"
    >
      <label htmlFor="size">
        <div className="section">
          <p>Choice of size</p>
          <small>required</small>
        </div>
        <select name="size" id="size" onChange={handleChange} >
          <option value={null}>Select a size</option>
          <option value="sm">Small - 8"</option>
          <option value="md">Medium - 12"</option>
          <option value="lg">Large - 14"</option>
          <option value="xl">Super - 18"</option>
        </select>
      </label>
      <div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'baseline'}} className="radioWrapper">
        <div className="radio">
          <input
          onChange={handleChange}
            type="radio"
            name="sauce"
            value="marinara"
            checked={formData.sauce === 'marinara'}
          />
          <label htmlFor="marinara">Marinara</label>
        </div>
        <div className="radio">
          <input
          onChange={handleChange}
            type="radio"
            name="sauce"
            value="alfredo"
            checked={formData.sauce === 'alfredo'}
          />
          <label htmlFor="alfredo">Alfredo</label>
        </div>
        <div className="radio">
          <input
          onChange={handleChange}
            type="radio"
            name="sauce"
            value="garlic"
            checked={formData.sauce === 'garlic'}
          />
          <label htmlFor="garlic">Garlic Sauce</label>
        </div>
        <div className="radio">
          <input
          onChange={handleChange}
            type="radio"
            name="sauce"
            value="blackbean"
            checked={formData.sauce === 'blackbean'}
          />
          <label htmlFor="blackbean">Black Bean Paste</label>
        </div>
        <div className="radio">
          <input
          onChange={handleChange}
            type="radio"
            name="sauce"
            value="barbecue"
            checked={formData.sauce === 'barbecue'}
          />
          <label htmlFor="barbecue">Tangy Barbecue</label>
        </div>
      </div>
    </form>
  );
};

export default Form;
