import { Formik, Form, Field, ErrorMessage } from "formik";

import Icon from "src/schared/components/Icon";

import validationSchema from "./validationSchema";
import fields from "./fields";

import css from "./ContactForm.module.css";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(_, { resetForm }) => resetForm()}
    >
      {({ errors }) => (
        <Form autocomlete="on" className={css.form}>
          <label className={css.label}>
            {fields.fullName.label}
            <Field
              {...fields.fullName}
              className={
                errors.fullName
                  ? `${css.input} ${css.validationError}`
                  : css.input
              }
            />
            <ErrorMessage
              className={css.errMessage}
              component="p"
              name={fields.fullName.name}
            />
          </label>
          <label className={css.label}>
            {fields.email.label}
            <Field
              {...fields.email}
              className={
                errors.email ? `${css.input} ${css.validationError}` : css.input
              }
            />
            <ErrorMessage
              className={css.errMessage}
              component="p"
              name={fields.email.name}
            />
          </label>
          <label className={css.label}>
            {fields.phone.label}
            <Field
              {...fields.phone}
              className={
                errors.phone ? `${css.input} ${css.validationError}` : css.input
              }
            />
            <ErrorMessage
              className={css.errMessage}
              component="p"
              name={fields.phone.name}
            />
          </label>
          <label className={css.label}>
            {fields.message.label}
            <Field
              {...fields.message}
              className={
                errors.message
                  ? `${css.textarea} ${css.validationError}`
                  : css.textarea
              }
            />
            <ErrorMessage
              className={css.errMessage}
              component="p"
              name={fields.message.name}
            />
          </label>

          <button className={css.btn} type="submit">
            Send
            <div className={css.circle}>
              <Icon
                iconName="arrow"
                width="16"
                height="16"
                className={css.icon}
              />
            </div>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
