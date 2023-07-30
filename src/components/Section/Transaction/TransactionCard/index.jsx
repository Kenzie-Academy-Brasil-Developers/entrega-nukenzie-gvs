import style from "./style.module.scss";
function TransactionCard({ description, type, value, removeTrans, id }) {
  return (
    <li
      className={`${style.li} ${
        type == "Entrada" ? style.entryLi : style.exitLi
      }`}
    >
      <div className={style.divTextTransaction}>
        <p>{description}</p>
        <span>{type}</span>
      </div>
      <div className={style.value}>
        <span className={style.valueMoney}>
          {Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className={style.button} onClick={() => removeTrans(id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}
export default TransactionCard;
