import log from './logger'
import Nextbot from './nextbot'

// (?) gropped state load from DB

let botLogic = {
  // "start" is a system state, bot will start here 
  // "idle" is a system state too, bot will be on hold in idle 
  // "_default" are the symbols that work for every state 
  start: { 
    GET_STARTED: { next: "question", params: {txt: "nft"} } },
    
  question: {
    GOOD_REPLY: { next: "idle" },
    BAD_REPLY: { next: "oops" } },

  oops: { next: "queston" },

  _default: {
    QUESTION: { next: "question" }
  }
}

let botText = {
  // (?) should a text be necessary if it's a default transition?
  question: {
    txt: "Banana?",
    btns: [{ tittle: "Yes", callback: "GOOD_REPLY" },
           { tittle: "No", callback: "BAD_REPLY"}]
  },
        
  oops: { txt: "Try again" }
}


let bot = new Nextbot(botLogic, botText, null, null, { botId: "en", platform: "messenger" }) // botWait, botTransitions
// (?) should I do botContent instead?s
// bot.info({ botId: "en", platform: "messenger" }) - ?? 

bot.input('123', 'GET_STARTED')
bot.input('333', 'GET_STARTED')
