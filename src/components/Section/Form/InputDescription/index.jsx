import style from "./style.module.scss";
function InputDescription({
  type,
  placeholder,
  value,
  id,
  name,
  label,
  setValue,
}) {
  return (
    <div className={style.formDescription}>
      <label className="title4" htmlFor={name}>
        {label}
      </label>
      <div>
        <input
          required
          className={style.input}
          type={type}
          placeholder={placeholder}
          value={value}
          id={id}
          name={name}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="p">Ex: Compra de roupas</span>
      </div>
    </div>
  );
}
export default InputDescription;
