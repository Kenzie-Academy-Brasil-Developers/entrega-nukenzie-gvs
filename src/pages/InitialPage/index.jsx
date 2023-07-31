import { useState } from "react";
import DefaultTemplate from "../../components/DefaultTemplate";
import Form from "../../components/Section/Form";
import Transaction from "../../components/Section/Transaction";
import { v4 as uuidv4 } from "uuid";
import TotalValue from "../../components/Section/TotalValue";
import style from "./style.module.scss";

function HomePage() {
  const [transList, setTransList] = useState([]);
  console.log(transList);
  function addTrans(formData) {
    const newTrans = { ...formData, id: uuidv4() };
    setTransList([...transList, newTrans]);
  }
  function removeTrans(removeId) {
    const newTransList = transList.filter((trans) => trans.id !== removeId);
    setTransList(newTransList);
  }
  const totalValueList = transList.reduce((totalValueSum, trans) => {
    if(trans.type == "Despesas"){
      return totalValueSum -= Number(trans.value)
    }else{
      return totalValueSum += Number(trans.value);
    }
  }, 0);

  return (
    <>
      <DefaultTemplate>
        <div className={style.container}>
          <div className={style.divForm}>
            <Form addTrans={addTrans} />
            <TotalValue totalValueList={totalValueList} />
          </div>
          <Transaction transList={transList} removeTrans={removeTrans} />
        </div>
      </DefaultTemplate>
    </>
  );
}
export default HomePage;
