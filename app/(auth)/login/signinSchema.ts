import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email Address Is Required"),
  password: Yup.string().required("Password Is Required"),
});
