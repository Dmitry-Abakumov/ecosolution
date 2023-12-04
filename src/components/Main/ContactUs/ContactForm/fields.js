const fields = {
  fullName: {
    name: "fullName",
    placeholder: "John Rosie",
    label: "* Full name:",
    type: "text",
    id: "fullName",
    autoComplete: "on",
  },
  email: {
    name: "email",
    placeholder: "johnrosie@gmail.com",
    label: "* E-mail:",
    type: "email",
    id: "email",
    autoComplete: "email",
  },
  phone: {
    name: "phone",
    placeholder: "+380961234567",
    label: "* Phone:",
    type: "tel",
    id: "phone",
    autoComplete: "on",
  },
  message: {
    name: "message",
    placeholder: "Your message",
    label: "Message:",
    as: "textarea",
    id: "message",
    autoComplete: "on",
  },
};

export default fields;
