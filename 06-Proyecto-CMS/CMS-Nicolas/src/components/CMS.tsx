import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { Contact } from "../schemas/Contact";

function CMS() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([{ ...contact, id: Math.random().toString() }, ...contacts]);
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  console.log(contacts);

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <ContactForm onSubmit={addContact} />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <ContactTable />
        </div>
      </div>
    </div>
  );
}

export default CMS;
