import React, { useState } from 'react';
import Counter from "../../components/Counter";

export default function Vote() {

  const [sobbleCount, setSobbleCount] = useState(0);
  const [grookeyCount, setGrookeyCount] = useState(0);
  const [scorbunnyCount, setScorbunnyCount] = useState(0);
  const [textField, setTextField] = useState("");


  return (
    <div>
      <form action="">
        <p>Type a message: {textField}</p>
        <input 
          onChange={(e) => setTextField(e.target.value)}
          type="text" 
          name="text" 
          id=""
        />
      </form>
      <Counter />
      <h1>Vote!</h1>
      
      <p>Scorbunny: {scorbunnyCount}</p>
      <button onClick={() => setScorbunnyCount(scorbunnyCount + 1)}>Vote Scorbunny</button>
      <p>Grookey: {grookeyCount}</p>
      <button onClick={() => setGrookeyCount(grookeyCount + 1)}>Vote Grookey</button>
      <p>Sobble: {sobbleCount}</p>
      <button onClick={() => setSobbleCount(sobbleCount + 1)}>Vote Sobble</button>
    </div>
  )
}
