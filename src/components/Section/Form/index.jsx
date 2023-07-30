import { useState } from "react";
import InputDescription from "./InputDescription";
import InputValue from "./InputValue";
import Select from "./Select";
import style from "./style.module.scss";

function Form({ addTrans }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function submit(e) {
    e.preventDefault();
    addTrans({ description, value, type });
    setDescription("");
    setValue("");
  }
  return (
    <>
      <div className={style.formContainer}>
        <form className={style.form} onSubmit={submit}>
          <InputDescription
            setValue={setDescription}
            value={description}
            placeholder="Digite aqui sua descricao"
            type="text"
            name={description}
            label="Descricao"
          />
          <InputValue
            name={value}
            placeholder="0"
            value={value}
            setValue={setValue}
            label="Valor(R$)"
            type="number"
          />
          <Select
            value1="Entrada"
            value2="Despesas"
            option1="Entrada"
            option2="Despesas"
            setValue={setType}
            valueSelect={type}
          />
          <button className={style.button} type="submit">
            Inserir valor
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;
