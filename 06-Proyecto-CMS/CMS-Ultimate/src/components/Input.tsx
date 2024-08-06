import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  name: string;
  type?: string;
};

function Input({ children, name, type = "text" }: Props) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        aria-describedby={`${name}-error`}
      />
      <div id={`${name}-error`} className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
}

export default Input;
