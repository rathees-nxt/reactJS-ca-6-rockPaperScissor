import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  RulesContainer,
  PopupContainer,
  CloseButton,
  RulesButton,
  PopupImage,
} from './styledComponents'

const RulesView = () => (
  <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
    {close => (
      <RulesContainer>
        <PopupContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size={20} />
          </CloseButton>
          <PopupImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules-img"
          />
        </PopupContainer>
      </RulesContainer>
    )}
  </Popup>
)

export default RulesView
