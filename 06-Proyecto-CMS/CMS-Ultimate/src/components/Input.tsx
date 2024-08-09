import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import InputError from "./InputError";

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
      <label htmlFor={name} className="form-label small">
        {children}
      </label>
      <input
        {...register(name)}
        type={type}
        className="form-control form-control-sm"
        id={name}
        aria-describedby={`${name}-error`}
      />
      {error?.message && <InputError name={name} error={error?.message} />}
    </div>
  );
}

export default Input;
