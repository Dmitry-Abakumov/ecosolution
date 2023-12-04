import { object, string } from "yup";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const phoneRegex = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm;
const fullNameRegex = /^[а-яА-Яa-zA-Z\s]*$/;

const validationSchema = object({
  fullName: string()
    .matches(fullNameRegex, "Invalid format")
    .required("Please, enter your full name"),
  email: string()
    .matches(emailRegex, "Invalid format")
    .max(50)
    .required("Please, enter your email"),
  phone: string()
    .matches(phoneRegex, 'Phone must be in this format: "+380XXXXXXXXX"')
    .required("Please, enter your phone number"),
  message: string().max(500, "Maximum allowed number of characters - 500"),
});

export default validationSchema;
