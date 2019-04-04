import InputText from "../InputText";
import InputError from "../InputError";
import InputLabel from "../InputLabel";

export const inputComponentMap = {
  // helpers
  label: InputLabel,
  error: InputError,
  // types
  text: InputText,
  email: InputText
};
