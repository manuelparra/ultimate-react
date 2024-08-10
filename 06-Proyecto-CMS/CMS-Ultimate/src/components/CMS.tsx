import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactsTable from "./ContactsTable";
import { Contact } from "../schemas/Contact";
import "./SwalAlert.css";

type Props = {};

function CMS({}: Props) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([{ ...contact, id: Math.random().toString() }, ...contacts]);
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm onSubmit={addContact} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactsTable contacts={contacts} onClick={deleteContact} />
        </div>
      </div>
    </div>
  );
}

export default CMS;
