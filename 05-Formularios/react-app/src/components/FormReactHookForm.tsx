import { useForm } from "react-hook-form";

type Props = {};

type Form = {
  name: string;
  lastname: string;
};

function FormReactHookForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          {...register("name", {
            minLength: {
              value: 3,
              message: "El largo mínimo es 3",
            },
          })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors?.name && <p>{errors?.name?.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          {...register("lastname", {
            validate: (value) =>
              value.length < 3 ? "El largo mínimo es 3" : true,
          })}
          type="text"
          id="lastname"
          className="form-control"
        />
        {errors?.lastname && <p>{errors?.lastname?.message}</p>}
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormReactHookForm;
