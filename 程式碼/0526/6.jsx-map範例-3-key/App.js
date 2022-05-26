import { data } from './data/student'
import React from 'react'

function App() {
  console.log(data)
  // [{id:xxxxx, name:'xxx', birth: xxx}, ... ]

  return (
    <>
      <div>
        {/* key值一定要，有id用id (靜態資料: 陣列資料單純呈現不會作任何變動時才能用index值作為key值) */}
        {/* key值需要加在return最接近map的元素中(最外面元素) */}
        {data.map((v, i) => {
          return (
            <React.Fragment key={v.id}>
              <p>{v.name}</p>
              <p>{v.birth}</p>
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default App
