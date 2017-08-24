import { log, Logger } from '../logger'
import { START, IDLE, DEFAULT } from './config'

export class Transition {
  
  constructor(private readonly botLogic, private readonly botText, botWait, botTransitions) {

  }

  public try(state, symbol) {
    if (symbol in this.botLogic[state]) {
      // make transition
    } else if ((DEFAULT in this.botLogic) && (symbol in this.botLogic[state])) {
      // make transition Transition.make(userId, state, symbol)
    }
  }

  public make(state, symbol) {
    
  }
}

export default Transition