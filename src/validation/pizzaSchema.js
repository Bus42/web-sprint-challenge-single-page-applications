import * as yup from "yup";

export default yup.object().shape({
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "extra-large"])
    .required(),
  sauce: yup
    .string()
    .oneOf(["marinara", "alfredo", "garlic", "blackbean", "barbecue"])
    .required(),
  toppings: yup.object(),
  glutenFree: yup.boolean(),
  specialInstructions: yup.string(),
  name: yup.string().min(2).required(),
});
