import "./index.css";

const Fieldset = ({ legend, children, className = "" }) => {
  return (
    <fieldset className={`fieldset ${className}`}>
      {legend && <legend className="fieldset__legend">{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
