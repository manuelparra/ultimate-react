import { FormProvider, useForm } from "react-hook-form";
import { Contact, contactSchema, contactTypeOptions } from "../schemas/Contact";
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
    onSubmit(contact);
    methods.reset();
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
      </form>
    </FormProvider>
  );
}

export default ContactForm;
