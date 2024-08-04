import { Contact } from "../schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactsTable({ contacts, onClick }: Props) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr
            key={contact.id}
            style={{ cursor: "pointer" }}
            onClick={() => onClick(contact.id)}
          >
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactsTable;
