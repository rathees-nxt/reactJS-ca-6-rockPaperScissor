import styled from 'styled-components'

export const GameViewBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 500px;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    width: 200px;
    margin-top: 35px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 400px;
    margin-top: 100px;
  }
`

export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 200px;
  @media screen and (max-width: 576px) {
    width: 100px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 150px;
  }
`

export const ChoiceImage = styled.img`
  width: 100%;
`
export const ResultViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin-top: 150px;
  @media screen and (max-width: 576px) {
    width: 200px;
    margin-top: 35px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 400px;
    margin-top: 80px;
  }
`

export const ResultPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PlayerName = styled.h1`
  font-family: Bree serif;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const PlayerImage = styled.img`
  width: 200px;
  @media screen and (max-width: 576px) {
    width: 100px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 150px;
  }
`

export const ResultContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const Result = styled.p`
  font-family: roboto;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const PlayAgainBtn = styled.button`
  font-family: Bree serif;
  background-color: #ffffff;
  font-size: 14px;
  color: #223a5f;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
