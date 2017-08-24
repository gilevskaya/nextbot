// const { Nextbot } = require("nextbot")
 
// Bot content description: botLogic and botText are required
let botLogic = {
  // "start" is a system state, bot will start here 
  // "idle" is a system state too, bot will be on hold in idle 
  // "greeting" is our custom state 
  start: { GET_STARTED: { next: "greeting" } },
  greeting: { next: "idle" }
}
 
let botText = {
  greeting: { txt: "Hello, world!" }
}
// ..end of the Bot Content
 
// OR INITIALIZE WITH BOTCONTENT? OR BOTH?
let bot = new Nextbot(botLogic, botText)
 
// waiting for the user messages to render 
bot.on('message', (event) => {
  console.log(`[${event.userId}] Rendering message: ${msg.message.content.txt}`)
  // you'll see: [user-id] Rendering message: Hello, world! 
})

// sending user input to bot (symbol) 
// GET_STARTED symbol is required for start->greeting transition
bot.input('user-id', 'GET_STARTED')