import { Contact } from "../schemas/Contact";
import swal from "sweetalert";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactsTable({ contacts, onClick }: Props) {
  const deleteRecord = (id: string) => {
    swal({
      title: "¿Deseas eliminar el contacto?",
      text: "Por favor, confirma que deseas eliminar los datos de contacto.",
      icon: "warning",
      closeOnClickOutside: false,
      className: "swal-text",
      buttons: {
        cancel: {
          text: "Cancelar",
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "Confirmar",
          value: true,
          visible: true,
          closeModal: true,
        },
      },
      dangerMode: true,
    }).then((willDelete: boolean) => {
      if (willDelete) {
        onClick(id);

        swal("Registro eliminado exitosamente.", {
          icon: "success",
        });
      }
    });
  };

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
          <tr
            key={contact.id}
            style={{ cursor: "pointer" }}
            onClick={() => deleteRecord(contact.id)}
          >
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
