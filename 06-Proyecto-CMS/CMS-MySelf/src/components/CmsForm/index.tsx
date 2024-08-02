import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cmsSchema, cmsForm } from "../../schemas/cms";

type formProps = {
  submit: (name: string, lastname: string, email: string) => void;
};

function CmsForm({ submit }: formProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<cmsForm>({
    resolver: zodResolver(cmsSchema),
  });

  const onSubmit = (data: cmsForm) => {
    submit(data.name, data.lastname, data.email);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            {...register("name")}
            type="text"
            className="form-control"
            id="name"
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
            className="form-control"
            id="lastname"
          />
          {errors?.lastname?.message ?? <p>{errors?.lastname?.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="email"
          />
          {errors?.email?.message ?? <p>{errors?.email?.message}</p>}
        </div>
        <Button typeButton={"primary"} behavior={"submit"}>
          Enviar
        </Button>
        <Button typeButton={"secondary"} addClassCss={"m-1"} behavior={"reset"}>
          Limpiar
        </Button>
      </form>
    </>
  );
}

export default CmsForm;
