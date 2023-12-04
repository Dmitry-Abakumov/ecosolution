const fields = {
  fullName: {
    name: "fullName",
    placeholder: "John Rosie",
    label: "* Full name:",
    type: "text",
    id: "fullName",
    autocomplete: "on",
  },
  email: {
    name: "email",
    placeholder: "johnrosie@gmail.com",
    label: "* E-mail:",
    type: "email",
    id: "email",
    autocomplete: "email",
  },
  phone: {
    name: "phone",
    placeholder: "+380961234567",
    label: "* Phone:",
    type: "tel",
    id: "phone",
    autocomplete: "on",
  },
  message: {
    name: "message",
    placeholder: "Your message",
    label: "Message:",
    as: "textarea",
    id: "message",
    autocomplete: "on",
  },
};

export default fields;
