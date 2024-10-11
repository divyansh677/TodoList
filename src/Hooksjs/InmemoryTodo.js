import React, { useReducer, useState } from 'react';

export default function InMemoryTodo() {
  const initialState = [];

  function reducer(state, action) {
    switch (action.type) {
      case 'Add':
        return [
          ...state,
          {
            text: action.payload.text,
            deadline: action.payload.deadline,
            timeAdded: action.payload.timeAdded,
            complete: false,
            delete: false,
          }
        ];
      case 'Delete':
        return state.map((todo, index) =>
          index === action.index ? { ...todo, delete: true } : todo
        );
      case 'Complete':
        return state.map((todo, index) =>
          index === action.index ? { ...todo, complete: !todo.complete } : todo
        );
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '' && deadline !== '') {
      const currentTime = new Date().toLocaleTimeString();
      dispatch({
        type: 'Add',
        payload: {
          text: inputValue,
          deadline: deadline,
          timeAdded: currentTime,
        },
      });
      setInputValue('');
      setDeadline('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-white/30 backdrop-blur-md shadow-lg p-8 rounded-3xl w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6 underline font-dancing">
          In-Memory Todo List
        </h1>

        <div className="flex flex-col space-y-4 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter new todo"
            className="w-full py-2 px-4 text-lg bg-white/70 rounded-lg outline-none shadow-sm"
          />

          <input
            type="datetime-local"
            value={deadline}
            onChange={handleDeadlineChange}
            className="w-full py-2 px-4 text-lg bg-white/70 rounded-lg outline-none shadow-sm"
          />

          <button
            onClick={handleAddTodo}
            className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out"
          >
            Add Todo
          </button>
        </div>

        <ul className="space-y-4">
          {state.map((todo, index) =>
            !todo.delete ? (
              <li
                key={index}
                className="bg-white/50 backdrop-blur-md p-4 rounded-lg flex flex-col shadow-lg"
              >
                <span
                  className={`text-lg ${
                    todo.complete ? 'line-through text-gray-400' : 'text-black'
                  }`}
                >
                  {todo.text}
                </span>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">
                    Time Added: {todo.timeAdded}
                  </span>
                  <span className="text-sm text-red-600">
                    Deadline: {new Date(todo.deadline).toLocaleString()}
                  </span>
                </div>

                <div className="flex space-x-3 mt-4">
                  <button
                    onClick={() => dispatch({ type: 'Complete', index })}
                    className={`py-1 px-3 rounded-lg text-white font-semibold transition duration-300 ease-in-out ${
                      todo.complete
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-yellow-500 hover:bg-yellow-600'
                    }`}
                  >
                    {todo.complete ? 'Undo' : 'Complete'}
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'Delete', index })}
                    className="py-1 px-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}
