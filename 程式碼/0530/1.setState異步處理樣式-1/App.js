import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          const newTotal = total + 1
          setTotal(newTotal)
          console.log(newTotal)
        }}
      >
        +1
      </button>
    </>
  )
}

export default App
