import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton
} from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro Endereço </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número endereço:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone :
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>
          Próxima Página
        </SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
