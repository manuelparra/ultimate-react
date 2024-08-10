import { FormProvider, useForm } from "react-hook-form";
import { Contact, contactSchema, contactTypeOptions } from "../schemas/Contact";
import swal from "sweetalert";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const Submit = (contact: Contact) => {
    swal({
      title: "¿Deseas agregar el registro?",
      text: "Por favor, confirma que deseas agregar los datos de contacto.",
      icon: "info",
      closeOnClickOutside: false,
      className: "swal-text",
      buttons: {
        no: { text: "No", value: false, visible: true, closeModal: true },
        si: { text: "Si", value: true, visible: true, closeModal: true },
      },
      dangerMode: false,
    }).then((willAdd: boolean) => {
      if (willAdd) {
        onSubmit(contact);
        methods.reset();

        swal("Registro agregado exitosamente.", {
          icon: "success",
        });
      }
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(Submit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email" type="email">
          Correo
        </Input>
        <Select
          name="type"
          label="Tipo de contacto"
          defaultMessage="-- Seleccione un tipo --"
          options={contactTypeOptions}
        />
        <Button type="submit">Enviar</Button>
        <Button
          type="button"
          variant="secondary"
          aditionalCss={{ marginLeft: "5px" }}
          onClick={() => methods.reset()}
        >
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
