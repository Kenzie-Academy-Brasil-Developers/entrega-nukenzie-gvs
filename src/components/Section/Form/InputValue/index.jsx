import style from "./style.module.scss";
function InputValue({ name, id, placeholder, label, setValue, value, type }) {
  return (
    <div className={style.divValue}>
      <label className="title4" htmlFor={name}>
        {label}
      </label>
      <input
        className={style.input}
        required
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
export default InputValue;
