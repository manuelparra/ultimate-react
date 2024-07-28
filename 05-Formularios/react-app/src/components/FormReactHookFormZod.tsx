import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm } from "../schemas/user";

function FormReactHookFormZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userForm>({
    resolver: zodResolver(userSchema),
  });

  console.log(errors);

  const onSubmit = (data: userForm) => {
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
        {errors?.name?.message ?? <p>{errors?.name?.message}</p>}
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
        {errors?.lastname?.message ?? <p>{errors?.lastname?.message}</p>}
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default FormReactHookFormZod;
