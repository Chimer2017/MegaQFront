import * as yup from "yup";
const loginValidation = yup.object().shape({
  username: yup
    .string()
    .required()
    .matches(/^[0-9a-zA-Z\u00f1\u00d1]+$/),
  password: yup.string().required(),
});

//Email validation regex is from
//https://www.w3resource.com/javascript/form/email-validation.php
//Yup default validation isnt used because of fake positives
//https://github.com/jquense/yup/issues/507
const signUpValidation = loginValidation.concat(
  yup.object().shape({
    email: yup
      .string()
      .required()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  })
);

//Schema is SIGNUP | LOGIN
export const validateSchema = async (schema, values) => {
  switch (schema) {
    case "SIGNUP":
      return await signUpValidation.validate(values);
    case "LOGIN":
      return await loginValidation.validate(values);
    default:
      throw new Error("Non valid schema name");
  }
};

export const buildFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((k) => {
    formData.append(k, object[k]);
  });

  return formData;
};

export const saveToken = (token) => {
  window.localStorage.removeItem("token");
  window.localStorage.setItem("token", token);
};
