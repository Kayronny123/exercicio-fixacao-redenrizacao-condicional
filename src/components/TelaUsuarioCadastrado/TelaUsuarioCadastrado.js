import { Div, Titulo } from "./styled";

function TelaUsuarioCadastrado(props) {
  return (
    <Div>
      <Titulo onClick={() => props.mudarTela(1)}>
        Você concluiu o cadastro, parabéns!!!
      </Titulo>
    </Div>
  );
}

export default TelaUsuarioCadastrado;
