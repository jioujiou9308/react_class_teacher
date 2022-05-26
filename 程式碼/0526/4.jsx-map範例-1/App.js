import { data } from './data/student'

function App() {
  console.log(data)

  const studentData = data.map((v, i) => {
    return <li>{v.name}</li>
  })

  console.log(studentData)

  return (
    <>
      <ul>{studentData}</ul>
    </>
  )
}

export default App
