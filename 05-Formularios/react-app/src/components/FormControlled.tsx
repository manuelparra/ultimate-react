import { FormEvent, useState } from "react";

function FormControlled() {
  const [user, setUser] = useState({ name: "", lastname: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          id="lastname"
          className="form-control"
          value={user.lastname}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormControlled;
