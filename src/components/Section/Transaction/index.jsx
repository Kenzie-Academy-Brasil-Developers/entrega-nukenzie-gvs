import TransactionCard from "./TransactionCard";
import style from "./style.module.scss";
function Transaction({ transList, removeTrans }) {
  return (
    <section className={style.divTransaction}>
      <div className={style.divContent}>
        <h1 className={style.title}>Resumo financeiro</h1>
        {transList.length > 0 ? (
          <ul className={style.ul}>
            {transList.map((trans) => (
              <TransactionCard
                key={trans.id}
                description={trans.description}
                value={trans.value}
                type={trans.type}
                id={trans.id}
                removeTrans={removeTrans}
              />
            ))}
          </ul>
        ) : (
          <span className={style.span}>
            Voce ainda nao possui nenhum lancamento
          </span>
        )}
      </div>
    </section>
  );
}
export default Transaction;
