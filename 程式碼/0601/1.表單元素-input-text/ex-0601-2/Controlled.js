import { useState } from 'react'

function Controlled() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <section id="input-text">
        <h1>文字輸入框</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
    </>
  )
}

export default Controlled
