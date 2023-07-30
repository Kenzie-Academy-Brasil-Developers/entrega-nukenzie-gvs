import style from "./style.module.scss";
function Select({ value1, value2, option1, option2, valueSelect, setValue }) {
  return (
    <div className={style.divSelect}>
      <span className="title4">Tipo de valor</span>
      <select
        className={style.select}
        value={valueSelect}
        onChange={(e) => setValue(e.target.value)}
      >
        <option className="p" value={value1}>
          {option1}
        </option>
        <option className="p" value={value2}>
          {option2}
        </option>
      </select>
    </div>
  );
}
export default Select;
