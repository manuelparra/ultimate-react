type Props = {
  name: string;
  error: string;
};

function InputError({ name, error }: Props) {
  return (
    <div id={`${name}-error`} className="form-text text-danger small">
      {error}
    </div>
  );
}

export default InputError;
