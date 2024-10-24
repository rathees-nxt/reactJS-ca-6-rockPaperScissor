import {
  ChoiceButton,
  ChoiceImage,
  GameViewBtnContainer,
  ResultViewContainer,
  ResultPlayerContainer,
  PlayerName,
  PlayerImage,
  ResultContentContainer,
  Result,
  PlayAgainBtn,
} from './styledComponents'

const GameView = props => {
  const {
    showResult,
    choicesList,
    restartGame,
    checkPlayerWins,
    playerDetails,
    gameStatus,
  } = props
  return (
    <div>
      {showResult && (
        <>
          <GameViewBtnContainer>
            <ChoiceButton
              type="button"
              data-testid="rockButton"
              onClick={() => checkPlayerWins(choicesList[0].id)}
            >
              <ChoiceImage
                key={choicesList[0].id}
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
              />
            </ChoiceButton>
            <ChoiceButton
              type="button"
              data-testid="scissorsButton"
              onClick={() => checkPlayerWins(choicesList[1].id)}
            >
              <ChoiceImage
                key={choicesList[1].id}
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
              />
            </ChoiceButton>
            <ChoiceButton
              type="button"
              data-testid="paperButton"
              onClick={() => checkPlayerWins(choicesList[2].id)}
            >
              <ChoiceImage
                key={choicesList[2].id}
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
              />
            </ChoiceButton>
          </GameViewBtnContainer>
        </>
      )}
      {!showResult && (
        <>
          <ResultViewContainer>
            <ResultPlayerContainer>
              <PlayerName>YOU</PlayerName>
              <PlayerImage src={playerDetails[0].imageUrl} alt="your choice" />
            </ResultPlayerContainer>
            <ResultPlayerContainer>
              <PlayerName>OPPONENT</PlayerName>
              <PlayerImage
                src={playerDetails[1].imageUrl}
                alt="opponent choice"
              />
            </ResultPlayerContainer>
          </ResultViewContainer>
          <ResultContentContainer>
            <Result>{gameStatus}</Result>
            <PlayAgainBtn type="button" onClick={restartGame}>
              PLAY AGAIN
            </PlayAgainBtn>
          </ResultContentContainer>
        </>
      )}
    </div>
  )
}

export default GameView
