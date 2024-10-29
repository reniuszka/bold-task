import "./index.css";

const FormInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  pattern,
  style,
  ariaLabel,
}) => {
  const formStyle =
    style === "full" ? "formInput formInput-full" : "formInput formInput-half";

  return (
    <div className={formStyle}>
      <label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          pattern={pattern}
          className="input"
          aria-label={ariaLabel}
        />
      </label>
    </div>
  );
};

export default FormInput;
