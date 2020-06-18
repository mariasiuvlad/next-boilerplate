import {useCallback} from 'react'

const ReducerLogBuilder = (namespace) => ({
  buildAction: (obj) => [namespace, 'Action', obj],
  buildPrevState: (obj) => [namespace, 'Previous', obj],
  buildNextState: (obj) => [namespace, 'Next', obj],
})

export const withReducerLogger = (reducer, namespace) => {
  const {buildAction, buildNextState, buildPrevState} = ReducerLogBuilder(
    namespace
  )
  const reducerWithLogger = useCallback(
    (state, action) => {
      const next = reducer(state, action)
      console.groupCollapsed(...buildAction(action))
      console.log(...buildPrevState(state))
      console.log(...buildNextState(next))
      console.groupEnd()
      return next
    },
    [reducer]
  )

  return reducerWithLogger
}

export const withRenderLogger = (name) => (WrappedComponent) => (props) => {
  console.log('[render]', name)
  return <WrappedComponent {...props} />
}
