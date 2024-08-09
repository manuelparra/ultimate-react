import { Contact } from "../schemas/Contact";

type Props = {
  contacts: Contact[];
};

function ContactsTable({ contacts }: Props) {
  return (
    <table className="table small table-striped table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id} style={{ cursor: "pointer" }}>
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
            <td>{contact.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactsTable;
