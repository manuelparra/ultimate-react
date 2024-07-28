import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/user";

type Props = {};

type Form = {
  name: string;
  lastname: string;
};

function FormReactHookFormZod({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    try {
      const x = userSchema.parse(data);
      console.log("estoy imprimiendo zod error");
      console.log(x);
    } catch (e) {
      console.log("estoy imprimiendo el catch error");
      console.log(e);
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          {...register("lastname")}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormReactHookFormZod;
