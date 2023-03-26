import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import * as styles from "./Intro-Style";
import Email from "../../../public/email.svg";
import Sms from "../../../public/sms.svg";

const Intro = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [message, setMessage] = useState("");
  const [assunto, setAssunto] = useState("");
  const [status, setStatus] = useState("");

  const onChange = (event, setState) => {
    setState(event.target.value);
  };

  const isEnableSend = () => {
    return (
      email == "" ||
      nome == "" ||
      sobrenome == "" ||
      message == "" ||
      assunto == ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      nome,
      sobrenome,
      assunto,
      email,
      message,
    };

    emailjs
      .send("service_6l77nqk", "template_dfxakmq", data, "fhltvKGed3FXXZPf9")
      .then(
        () => {
          setNome("");
          setSobrenome("");
          setAssunto("");
          setMessage("");
          setEmail("");
          setStatus("SUCCESS");
        },
        () => {
          setStatus("ERROR");
        }
      );
  };

  return (
    <styles.Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        venenatis massa nec turpis cursus luctus.
      </p>
      <styles.Flex>
        <div>
          <Image src={Sms} alt="Sms" width={40} height={40} />
          <p>Numero telefone</p>
        </div>
        <div>
          <Image src={Email} alt="Email" width={40} height={40} />
          <p>Endereço email</p>
        </div>
      </styles.Flex>
      <styles.Box>
        <styles.Form>
          <h2>Deixe uma mensagem, responderei em breve.</h2>
          <div>
            <styles.Inputs>
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={(event) => onChange(event, setNome)}
              />
            </styles.Inputs>
            <styles.Inputs>
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={sobrenome}
                onChange={(event) => onChange(event, setSobrenome)}
              />
            </styles.Inputs>
          </div>
          <div>
            <styles.Inputs>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => onChange(event, setEmail)}
              />
            </styles.Inputs>
            <styles.Inputs>
              <label>Assunto</label>
              <input
                type="text"
                name="assunto"
                value={assunto}
                onChange={(event) => onChange(event, setAssunto)}
              />
            </styles.Inputs>
          </div>
          <div>
            <styles.Message>
              <label>Mensagem</label>
              <textarea
                value={message}
                onChange={(event) => onChange(event, setMessage)}
                maxLength={200}
              />
            </styles.Message>
          </div>
          <p>{message.length}/200</p>

          <styles.Btn>
            <button
              disabled={isEnableSend()}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Enviar
            </button>
          </styles.Btn>
          {status == "SUCCESS" ? (
            <p className="sucesso">
              Mensagem Enviada com sucesso. Seu contato será respondido o mais
              breve possível.
            </p>
          ) : status == "ERROR" ? (
            <p className="erro">
              Erro ao enviar mensagem. Por favor tente novamente.
            </p>
          ) : null}
        </styles.Form>
      </styles.Box>
    </styles.Container>
  );
};

export default Intro;
