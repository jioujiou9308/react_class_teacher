import React from 'react'

function App() {
  const [total, setTotal] = React.useState(0)

  return (
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}

export default App
