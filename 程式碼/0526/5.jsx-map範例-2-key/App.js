import { data } from './data/student'

function App() {
  console.log(data)
  // [{id:xxxxx, name:'xxx', birth: xxx}, ... ]

  return (
    <>
      <ul>
        {/* key值一定要，有id用id，不得已(or靜態資料)才用index值 */}
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
