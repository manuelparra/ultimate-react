import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Type = "text" | "email";

type Props = {
  children: ReactNode;
  name: string;
  type?: Type;
};

function Input({ children, name, type = "text" }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        {children}
      </label>
      <input
        {...register(name)}
        type={type}
        className="form-control"
        id={name}
        placeholder=""
      />
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  );
}

export default Input;
