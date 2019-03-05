import React, { useState } from 'react';
import Counter from "../../components/Counter";

export default function Vote() {
  const [sobbleCount, voteSobble] = useState(0);
  const [grookeyCount, voteGrookey] = useState(0);
  const [scorbunnyCount, voteScorbunny] = useState(0);
  return (
    <div>
      <h1>Vote!</h1>
      {/* <Counter name={'Scorbunny'} />
      <Counter name={'Grookey'} />
      <Counter name={''} /> */}
      <p>Scorbunny: {scorbunnyCount}</p>
      <button onClick={() => voteScorbunny(scorbunnyCount + 1)}>Vote Scorbunny</button>
      <p>Grookey: {grookeyCount}</p>
      <button onClick={() => voteGrookey(grookeyCount + 1)}>Vote Grookey</button>
      <p>Sobble: {sobbleCount}</p>
      <button onClick={() => voteSobble(sobbleCount + 1)}>Vote Sobble</button>
    </div>
  )
}
