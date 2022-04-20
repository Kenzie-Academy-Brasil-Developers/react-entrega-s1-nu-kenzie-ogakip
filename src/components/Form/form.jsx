import {
  FormTransactionBox,
  BoxTransactionDescription,
  BoxDescriptionInputBox,
  BoxTransactionEncapsulate,
  BoxTransactionInputValue,
  BoxTransactionOptionBox,
} from "./style.js";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const FormInput = ({ listTransactions, setListTransactions }) => {
  const currentDate = () => {
    const date = new Date(),
      day = date.getDate().toString(),
      dayF = day.length === 1 ? "0" + day : day,
      month = (date.getMonth() + 1).toString(),
      monthF = month.length === 1 ? "0" + month : month,
      yearF = date.getFullYear();
    return dayF + "/" + monthF + "/" + yearF;
  };

  const transactionSchema = yup.object().shape({
    description: yup.string(),
    value: yup
      .string()
      .required("O valor é obrigatório")
      .matches(/^[0-9]+$/, "O valor deve conter apenas números"),
    type: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(transactionSchema),
  });

  const onSubmitFunction = (data) => {
    if (data.description === "") {
      data.description = "Sem descrição";
    }
    console.log(data)
    addTransactions(data);
  };

  const addTransactions = (data) => {
    toast.success(`${data.description} foi adicionado com sucesso!`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    if (data.type === "Despesa") {
      const newtranslation = {
        description: data.description,
        date: currentDate(),
        type: data.type,
        value: Number(data.value),
      };
      setListTransactions([...listTransactions, newtranslation]);
    } else if (data.type === "Entrada") {
      const newtranslation = {
        description: data.description,
        date: currentDate(),
        type: data.type,
        value: Number(data.value),
      };
      setListTransactions([...listTransactions, newtranslation]);
    }
  };

  useEffect(() => {
    if (errors.value) {
      toast.error(`${errors.value.message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [errors]);

  return (
    <>
      <FormTransactionBox
        as={motion.form}
        initial={{ y: 0}}
        animate={{ y: 3 }}
        exit={{ y: 0 }}
        transition={{duration: 0.5}}
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <BoxTransactionDescription>
          <p>Descrição</p>
          <input placeholder="Sem descrição" {...register("description")} />
          <span>Ex: Compra de roupas</span>
        </BoxTransactionDescription>
        <BoxDescriptionInputBox>
          <BoxTransactionInputValue>
            <label>Valor</label>
            <BoxTransactionEncapsulate>
              <input placeholder="Valor" {...register("value")} />
              <span>R$</span>
            </BoxTransactionEncapsulate>
          </BoxTransactionInputValue>
          <BoxTransactionOptionBox>
            <label>Tipo de valor</label>
            <select defaultValue={"Entrada"} {...register("type")}>
              <option>Entrada</option>
              <option>Despesa</option>
            </select>
          </BoxTransactionOptionBox>
        </BoxDescriptionInputBox>
        <button type="submit">Inserir valor</button>
      </FormTransactionBox>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default FormInput;
