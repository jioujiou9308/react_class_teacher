import { data } from './data/student'

function App() {
  console.log(data)
  // [{id:xxxxx, name:'xxx', birth: xxx}, ... ]

  return (
    <>
      <ul>
        {/* key值一定要，有id用id (靜態資料: 陣列資料單純呈現不會作任何變動時才能用index值作為key值) */}
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
