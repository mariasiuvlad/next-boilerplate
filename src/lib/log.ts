import debug from 'debug'

const BASE = 'playtwin-web'
const COLOURS = {
  trace: '#d8dee9',
  info: '#5e81ac',
  warn: '#ebcb8b',
  error: '#bf616a',
} // choose better colours :)

class Log {
  generateMessage(level, message, source) {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`
    const createDebug = debug(namespace)

    // Set the colour of the message based on the level
    createDebug.color = COLOURS[level]

    if (source) {
      createDebug(source, message)
    } else {
      createDebug(message)
    }
  }

  trace(message, source = null) {
    return this.generateMessage('trace', message, source)
  }

  info(message, source = null) {
    return this.generateMessage('info', message, source)
  }

  warn(message, source = null) {
    return this.generateMessage('warn', message, source)
  }

  error(message, source = null) {
    return this.generateMessage('error', message, source)
  }
}

export default new Log()
