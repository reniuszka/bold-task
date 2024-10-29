import ContactForm from "../../components/form";
import Heading from "../../components/heading";
import Text from "../../components/text";
import contactModel from "../../models/CONTACT.model";

import "./index.css";

const Contact = () => {
  const { heading, text } = contactModel;

  return (
    <section className="contact">
      <div className="container">
        {contactModel && (
          <div className="content">
            {heading && <Heading level={2}>{heading}</Heading>}
            {text && <Text>{text}</Text>}
          </div>
        )}
        <div className="form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
