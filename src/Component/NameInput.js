import React from 'react'
import "../Styles/NameInput.css"

export default function NameInput() {
  return (
    <div>
        <div class='input-field'>
            <input type="text" required spellCheck='false'/>
            <label> Enter your Name </label>

        </div>
      
    </div>
  )
}
