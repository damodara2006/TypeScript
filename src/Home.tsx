import React from 'react'
import { useState } from 'react'
function Home() {
  const [Name, setName] = useState<string>("")
  
  const handle = (e: HTMLInputElement) => {
    console.log(e)
  }

  return (
    <div>
      <input type="text" id='input' style={{ border: "1" }} value={Name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => {
        const e = document.getElementById("input") as HTMLInputElement || null
        handle(e)
      }}>Submit</button>
    </div>
  )
}

export default Home
