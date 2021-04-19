import React, { useState } from "react";

const Form = (props) => {
  const initialFormData = {
    size: "",
    sauce: {
      marinara: true,
      alfredo: false,
      garlic: false,
      blackbean: false,
      barbecue: false,
    },
    toppings: [],
    glutenFree: false,
    specialInstructions: "",
    quantity: 1,
  };
  const [formData, setFormData] = useState(initialFormData);
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      action="submit"
    >
      <label htmlFor="size">
        <div className="section">
          <p>Choice of size</p>
          <small>required</small>
        </div>
        <select name="size" id="size">
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
            type="radio"
            name="marinara"
            value="marinara"
            checked={formData.sauce.marinara}
          />
          <label htmlFor="marinara">Marinara</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="alfredo"
            value="alfredo"
            checked={formData.sauce.alfredo}
          />
          <label htmlFor="alfredo">Alfredo</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="garlic"
            value="garlic"
            checked={formData.sauce.garlic}
          />
          <label htmlFor="garlic">Garlic Sauce</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="blackbean"
            value="blackbean"
            checked={formData.sauce.blackbean}
          />
          <label htmlFor="blackbean">Black Bean Paste</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="barbecue"
            value="barbecue"
            checked={formData.sauce.barbecue}
          />
          <label htmlFor="barbecue">Tangy Barbecue</label>
        </div>
      </div>
    </form>
  );
};

export default Form;
