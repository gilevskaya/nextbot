export interface IBotInfo {
  platform?: string,
  botId?: string
}

export interface IBotText_Message {
  string?: any
}

export interface IUserMessage {
  userId: string,
  waitBefore?: number,
  typingOn?: boolean, // or typingOn?
  message?: IBotText_Message
  botInfo?: IBotInfo
}