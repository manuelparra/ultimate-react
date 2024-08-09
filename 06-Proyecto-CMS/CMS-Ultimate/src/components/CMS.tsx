import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactsTable from "./ContactsTable";
import { Contact } from "../schemas/Contact";

type Props = {};

function CMS({}: Props) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([{ ...contact, id: Math.random().toString() }, ...contacts]);
  };

  console.log(contacts);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm onSubmit={addContact} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactsTable contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default CMS;
