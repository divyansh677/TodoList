import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':  // Fix spelling here
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {  // Counter function moved outside
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>  {/* Corrected h1 tag */}
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    );
}

export default Counter;