import styled from "styled-components";

export const HomeHeader = styled.header`
  width: 100%;
  background-color: #9083d1;
  display: flex;
  flex-direction: row;
  color: white;
  font-weight: 700;
  padding: 12px;
  overflow: hidden;
`

export const HomeMain = styled.main`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const HomeForm = styled.form`
  width: 50%;
  background-color: #9083d1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: -5px 9px 19px -5px rgba(0,0,0,0.75);
  border: 1px solid #000;
`

export const HomeTitle = styled.h2`
  color: #fff;
  margin: 20px;
`

export const HomeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 0 8px 12px 8px;
  width: 100%;
`

export const HomeInput = styled.input`
  border: none;
  margin: 0 12px 12px 12px;
  color: #000;
  background-color: #efecf4;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 16px;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: 16px;
  padding: 16px;
  box-shadow: -5px 9px 19px -5px rgba(0,0,0,0.75);
  border: 1px solid #000;
  border-radius: 16px;
`

export const HomeLabel = styled.label`
  margin: 0 12px 4px 12px;
  color: white;
  font-size: 20px;
  font-weight: 500;
`

export const HomeIcon = styled.i`
  height: 100%;
`

export const HomeButton = styled.button`
  padding: 24px;
  font-size: 24px;
  box-shadow: -5px 9px 19px -5px rgba(0,0,0,0.75);
  color: #efecf4;
  border: 2px solid #efecf4;
  border-radius: 16px;
  margin: 16px;
  width: 90%;
  background-color: #303030;
  font-weight: 700;

  &:hover {
    background-color: #9083d1;
    border: 2px solid #303030;
    color: #efecf4;
  }

  &:active {
    background-color: #efecf4;
    color: #9083d1;
    box-shadow: inset -9px 7px 20px -15px rgba(0,0,0,0.59);
  }
`

export const HomeImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 20%; /* try 20% 10% */ 
`

export const HomeIconImage = styled.img`
  border-radius: 75%;
  max-width: 150px;
  max-height: 150px;
  margin: 4px;
  border: 1px solid #9083d1;
`

export const HomeFooter = styled.footer`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 36px solid #000;
`

export const HomeTeamContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  flex-direction: row;
`

export const HomeTeam = styled.div`
  margin: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`