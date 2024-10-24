import styled from 'styled-components'

export const RulesContainer = styled.div`
  background-color: #ffffff;
  margin: auto;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 230px;
  padding: 10px;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    height: 350px;
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    height: 500px;
    width: 700px;
  }
`

export const RulesButton = styled.button`
  font-family: bree serif;
  font-size: 14px;
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const PopupImage = styled.img`
  width: 100%;
  height: 90%;
`
