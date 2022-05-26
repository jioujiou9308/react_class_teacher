import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {/* 示範三元表達式 */}
      <p>{total > 10 ? 'total大於10了' : '目前小於等於10'}</p>
      {/* 示範inline if語法 */}
      <p>{total > 5 && 'total大於5了'}</p>
      {/* 相當於上面的執行結果 */}
      <p>{total > 5 ? 'total大於5了' : ''}</p>
    </>
  )
}

export default App
