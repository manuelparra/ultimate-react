import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Contact, contactSchema, contactTypeOptions } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email" type="email">
          Correo
        </Input>
        <Select
          name="type"
          label="Tipo de contacto"
          defaultMessage="-- Selecciona tipo --"
          options={contactTypeOptions}
        />
        <Button type="submit">Enviar</Button>
        <Button onClick={() => methods.reset()} variant="secondary">
          Limpiar
        </Button>
        <Button type="reset" variant="secondary">
          Limpiar También
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
