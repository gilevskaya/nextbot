import { log, Logger } from '../logger'
import { START, IDLE } from './config'
import Transition from './transition'

class UserBotFSM {
  private readonly log: Logger
  private currentState: string
  private transition: Transition

  constructor(nextbot: Nextbot, userId: string, botLogic, botText, botWait, 
    botTransitions, botInfo?, state?) {

    nextbot.on('message', )
    // botInfo is used only for logger setup
    if (botInfo) {
      let logstr = '['
      if ('platform' in botInfo) logstr += botInfo.platform + '|'
      if ('botId' in botInfo) logstr += botInfo.botId + '|'
      logstr += `${userId}] `
      this.log = new Logger(logstr)
    } else this.log = new Logger()

    // botContent is used only for Transition
    // this.transition = new Transition(botLogic, botText, botWait, botTransitions)

    if (state) this.run(state)
    else this.run(START)
  }

  public async symbol(symbol: string, params?: any) {
    this.log.info(`Recieved symbol: ${symbol}`)
    // let isPossible = await this.transition.try(this.currentState, symbol)
    // if isPossible this.transition.make ...
    // render result log and emit a new message
    // if trRes != null emit new message
  }

  private run(state?: string) {
    // if (!(state in this.botLogic)) {
    //   this.log.err(`Can't run state that is not in botLogic: ${state}`); return
    // }
    this.currentState = state
    this.log.info(`Running state: ${state}`)
    // this.transition.try(this.currentState)
    // if message nextbot.emit('message'...)
  }
}


export class Nextbot {
  private userbots: { string?: UserBotFSM }
  private mesqueue: {}
  // should transition be here or in UserBotFSM

  // BotContent?!
  // Should I add config to constructor? or add a static method to change it?
  constructor(private readonly botLogic, private readonly botText, 
    private readonly botWait?, private readonly botTransitions?,
    public readonly botInfo?) {
    this.userbots = {}
    log.info('# New Nextbot is created')
  }

  // input type? params?
  public input(userId: string, symbol: string, params?: any) {
    this.getBotFSM(userId).symbol(symbol, params)
  }

  public on(etype: string) {//, handler: (string) => void) {
    log.err('BOT')
  }

  private getBotFSM(userId: string): UserBotFSM {
    if (userId in this.userbots) { return this.userbots[userId] }
    let newbot = new UserBotFSM(this, userId, this.botLogic, this.botText, 
      this.botWait, this.botTransitions, this.botInfo)
    this.userbots[userId] = newbot
    return newbot
  }
}

export default Nextbot