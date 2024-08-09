import { useFormContext } from "react-hook-form";
import InputError from "./InputError";

type Props = {
  options: readonly string[];
  defaultMessage: string;
  label: string;
  name: string;
};

function Select({ options, defaultMessage, label, name }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label className="form-label small">{label}</label>
      <select
        {...register(name)}
        className="form-select form-select-sm"
        aria-label="Default select"
      >
        <option>{defaultMessage}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error?.message && <InputError name={name} error={error?.message} />}
    </div>
  );
}

export default Select;
