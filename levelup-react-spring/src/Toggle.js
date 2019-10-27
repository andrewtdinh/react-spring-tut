import React, { useState } from 'react';

const Toggle = () => {
  const [ isToggled, setToggle ] = useState(false);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  )
}

export default Toggle;