import React from "react";
import { LoginContainer, LoginLabel, LoginForm, LoginButton, LoginInput, Container, LoginTitle, LoginText } from "./login.styles";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate()

  function navigateToHome() {
    navigate('home')
  }

  return (
    <LoginContainer>
        <Container>
          <div>
            <h2>Bem-vindo de volta!</h2>
            <p>É muito bom cuidar da saúde, melhor ainda com a Global!</p>
            <LoginButton>Cadastre-se</LoginButton>
          </div>
        </Container>
        <LoginForm>
          <div>
            <LoginTitle>Acesse</LoginTitle>
            <LoginText>Insira seu CPF e senha para entrar</LoginText>
          </div>
          <div>
            <LoginLabel>CPF</LoginLabel>
            <br />
            <LoginInput required type="text" placeholder="Digite seu CPF..." />
          </div>
          <div>
            <LoginLabel>Senha</LoginLabel>
            <br />
            <LoginInput required type="password" placeholder="Digite sua senha..." />
          </div>
          <LoginButton type="submit" onClick={navigateToHome}>Entrar</LoginButton>
        </LoginForm>
    </LoginContainer>
  );
}
