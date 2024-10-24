import {
  ScoreContainer,
  ScoreContentContainer,
  ScoreHeading,
  ScoreBoard,
  ScoreBoardHeading,
  ScoreBoardPara,
} from './styledComponents'

const Score = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ScoreContentContainer>
        <ScoreHeading>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </ScoreHeading>
      </ScoreContentContainer>
      <ScoreBoard>
        <ScoreBoardHeading>Score</ScoreBoardHeading>
        <ScoreBoardPara>{score}</ScoreBoardPara>
      </ScoreBoard>
    </ScoreContainer>
  )
}

export default Score
