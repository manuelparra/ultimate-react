import { FormEvent, useRef } from "react";

type Props = {};

function FormUncontrolled({}: Props) {
  // para poder obtener el valor de los inputs utilizaremos el thook useRef, uncontrolled formulario
  // basicamente useRef permite obetener referencias de estos campos de texte de modo que cuando algo
  // ocurra (un evento por ejemplo) entonces podemos ir a buscar el valor de estos.
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const user = {
      name: nameRef.current?.value,
      lastName: lastnameRef.current?.value,
    };

    console.log("Enviando...", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          ref={lastnameRef}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormUncontrolled;
