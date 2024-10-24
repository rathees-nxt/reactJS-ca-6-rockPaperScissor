import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
  font-family: bree serif;
  margin-top: 20px;
`

export const ScoreContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreHeading = styled.h1`
  color: #ffffff;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 80px;
  height: 100%;
  border-radius: 10px;
`

export const ScoreBoardHeading = styled.p`
  color: #223a5f;
  font-size: 16px;
  margin-top: 15px;
  font-weight: 580;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const ScoreBoardPara = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  font-size: 20px;
  margin-top: 0%;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
