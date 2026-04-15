import ValidateFields from "../../services/validate/validateForm";

// Approche factorisée
const VALIDATORS = {
    title: (value) => {
      return ValidateFields.min(value, 3) || ValidateFields.max(value, 25);
    },
    description: (value) => {
      return ValidateFields.min(value, 5);
    },
  };
  export default  VALIDATORS;