import InputContainer from "../InputContainer";
import InputControl from "../InputControl";
import InputText from "../InputText";
import InputError from "../InputError";
import InputLabel from "../InputLabel";

export const inputComponentMap = {
  // layout
  control: InputControl,
  container: InputContainer,
  // helpers
  label: InputLabel,
  error: InputError,
  // types
  text: InputText
};

export const inputIconMap = {
  text: "fa-text"
};
