import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      // Ensure the input has been rendered before accessing classList
      if (inputRef.current.classList) {
        inputRef.current.classList.add('abc');  // Add class "abc" to the input
      } else {
        console.log('classList is not available on inputRef');
      }
    } else {
      console.log('inputRef is null');
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
