# React


### Redux Theory
@reduxjs/toolkit

store maintains state
reducer => javascript functions => function(state, action) { return state}
action => plain javascript object => { type: 'increment', payload?: any }
action => plain javascript object => { type: 'decrement', payload?: any }
action => plain javascript object => { type: 'incrementBy', payload?: [5] }

dispatch => function () {} => dispatch({ type: 'increment', [payload?: any data type ]})
state
dispatch(increment)
dispatch(incrementBy(5))

action types const INCREMENT = 'increment';
action objects => const increment = { type: INCREMENT }
action creators => const incrementBy = (incrementValue) => { type: INCREMENT_BY, payload: incrementValue}
