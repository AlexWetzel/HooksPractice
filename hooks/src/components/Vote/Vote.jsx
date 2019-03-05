import React, { useState } from 'react';
import Counter from "../../components/Counter";

export default function Vote() {

  const [sobbleCount, setSobbleCount] = useState(0);
  const [grookeyCount, setGrookeyCount] = useState(0);
  const [scorbunnyCount, setScorbunnyCount] = useState(0);
  const [form, setForm] = useState({});

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div>
      <form action="">
        <p>Name: {form.name}</p>
        <input 
          onChange={(e) => handleInputChange(e)}
          type="text" 
          name="name" 
          id=""
        />
        <p>Phone: {form.phone}</p>
        <input 
          onChange={(e) => handleInputChange(e)}
          type="text" 
          name="phone" 
          id=""
        />
        <p>Birthday: {form.birthday}</p>
        <input 
          onChange={(e) => handleInputChange(e)}
          type="text" 
          name="birthday" 
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
