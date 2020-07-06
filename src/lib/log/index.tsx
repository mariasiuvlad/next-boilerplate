import debug from 'debug'

debug.enable('pt-web*')
export const logger = debug('pt-web')

export const useStateLogger = (state, setState, log) => (value) => {
  log('%s | %o', 'update', {from: state, to: value})
  setState(value)
}
