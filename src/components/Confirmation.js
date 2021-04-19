import React from "react";

const Confirmation = (props) => {
  const {
    name,
    size,
    glutenFree,
    sauce,
    toppings,
    instructions,
    clearConfirmation,
  } = props;
  return (
    <div id="confirmation">
      <h2>Thanks for placing your order, {name}!</h2>
      <p>
        That's a {size} {sauce} pizza
        {glutenFree ? " on a gluten-free crust" : ""} with{" "}
        {toppings.map((topping, index) => (
          <span key={index}>{topping}, </span>
        ))}
        and our special herbs and spices delivered hot and fresh to your door!
        And, we'll make sure to {instructions}!
      </p>
      <button onClick={clearConfirmation}>Got it!</button>
    </div>
  );
};

export default Confirmation;
