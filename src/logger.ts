export enum LogLevel { err = 0, warn = 1, info = 2, dev = 3 }

export class Logger {
  private curpre

  constructor(private readonly pre: string = '',
    private readonly level = LogLevel[process.env.LOGLEVEL || 'info']) {
    this.curpre = pre
  }

  public err (main: any, ...other: any[]) { return this.at(LogLevel.err,  main, other) }
  public warn(main: any, ...other: any[]) { return this.at(LogLevel.warn, main, other) }
  public info(main: any, ...other: any[]) { return this.at(LogLevel.info, main, other) }
  public dev (main: any, ...other: any[]) { return this.at(LogLevel.dev,  main, other) }

  public err_noln  (main: any, ...other: any[]) { return this.at(LogLevel.err,  main, other, true) }
  public warn_noln (main: any, ...other: any[]) { return this.at(LogLevel.warn, main, other, true) }
  public info_noln (main: any, ...other: any[]) { return this.at(LogLevel.info, main, other, true) }
  public dev_noln  (main: any, ...other: any[]) { return this.at(LogLevel.dev,  main, other, true) }

  public ln(): Logger {
    process.stdout.write('\n')
    this.curpre = this.pre  
    return this
  }

  private at(level: LogLevel, main: any, other: any[], noln = false): Logger {
    if (this.level >= level) {
      let res = this.curpre + main
      if (other) res += ' ' + other.join(' ')
      if (!noln) res += '\n'
      process.stdout.write(res)
    }
    return this
  }
}

export let log = new Logger()

export default log