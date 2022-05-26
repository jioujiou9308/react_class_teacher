import { data } from './data/student'

function App() {
  console.log(data)
  // [{id:xxxxx, name:'xxx', birth: xxx}, ... ]

  const studentData = data.map((v, i) => {
    return <li>{v.name}</li>
  })

  console.log(studentData)
  // [<li>{xxx}</li>, ... ]

  return (
    <>
      <ul>{studentData}</ul>
    </>
  )
}

export default App
