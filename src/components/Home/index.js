import {Component} from 'react'
import './index.css'

import Score from '../Score'
import RulesView from '../RulesView'
import GameView from '../GameView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    showResult: true,
    score: 0,
    gameStatus: '',
    playerDetails: [],
  }

  restartGame = () => {
    this.setState({showResult: true})
  }

  getGameStatus = (player1Id, player2Id) => {
    if (player1Id === 'ROCK') {
      switch (player2Id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (player1Id === 'PAPER') {
      switch (player2Id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (player2Id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkPlayerWins = id => {
    const {score} = this.state
    const player = choicesList.filter(item => item.id === id)
    const oppenentPlayer =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const status = this.getGameStatus(player[0].id, oppenentPlayer.id)
    console.log(status)
    let newScore = score
    if (status === 'YOU WON') {
      newScore = score + 1
    } else if (status === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      showResult: false,
      playerDetails: [player[0], oppenentPlayer],
      gameStatus: status,
      score: newScore,
    })
  }

  render() {
    const {showResult, gameStatus, score, playerDetails} = this.state
    return (
      <div className="main-container">
        <Score score={score} />
        <GameView
          choicesList={choicesList}
          showResult={showResult}
          score={score}
          playerDetails={playerDetails}
          gameStatus={gameStatus}
          restartGame={this.restartGame}
          checkPlayerWins={this.checkPlayerWins}
        />
        <div className="button">
          <RulesView />
        </div>
      </div>
    )
  }
}

export default Home
