import styled from "styled-components";

export const LoginContainer = styled.div`
  box-shadow: -5px 9px 19px -5px rgba(0,0,0,0.75);
  background-color: #efecf4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px;
  position: relative;
  top: 33%;
  left: 30%;
  width: 40%;
  height: 40%;
`
export const LoginTitle = styled.h2`
  color: #fff;
  margin: 0;
`

export const LoginText = styled.p`
  color: #fff;
  margin: 0 0 12px 0;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  width: 50%;
`

export const LoginForm = styled.form`
  background-color: #9083d1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  width: 40%;
  height: 100%;
`

export const LoginLabel = styled.label`
  margin-top: 12px;
  color: white;
  font-size: 20px;
  font-weight: 500;
`

export const LoginButton = styled.button`
  padding: 8px 12px;
  color: #efecf4;
  border: 2px solid #efecf4;
  border-radius: 16px;
  margin-top: 16px;
  width: 50%;
  background-color: #9083d1;
  font-weight: 700;

  &:hover {
    background-color: #efecf4;
    border: 2px solid #9083d1;
    color: #9083d1;
  }

  &:active {
    background-color: #efecf4;
    color: #9083d1;
    box-shadow: inset -9px 7px 20px -15px rgba(0,0,0,0.59);
  }
`

export const LoginInput = styled.input`
  border: none;
  color: #000;
  background-color: efecf4;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 16px;
`