type Props = {
  options: readonly string[];
  defaultMessage: string;
  label: string;
};

function Select({ options, defaultMessage, label }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" aria-label="Default select example">
        <option>{defaultMessage}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
