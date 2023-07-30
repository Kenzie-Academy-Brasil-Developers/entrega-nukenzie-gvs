import style from "./style.module.scss";
function TotalValue({ totalValueList }) {
  return (
    <div className={style.valueContainer}>
      <div className={style.textContainer}>
        <h3 className="title4">Valor total:</h3>
        <span className="p">O valor se refere ao saldo</span>
      </div>
      <div>
        <span className={style.valueTotal}>
          {Number(totalValueList).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
}
export default TotalValue;
