import { data } from './data/student'

function App() {
  console.log(data)
  // [{id:xxxxx, name:'xxx', birth: xxx}, ... ]

  return (
    <>
      <ul>
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
