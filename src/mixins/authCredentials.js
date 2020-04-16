import { required, minLength, between, email } from "vuelidate/lib/validators";
const authCredentials = {
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  }
};
export default authCredentials;
