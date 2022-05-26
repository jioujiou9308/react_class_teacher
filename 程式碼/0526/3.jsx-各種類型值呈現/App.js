function App() {
  return (
    <>
      <h1>Number</h1>
      {123}
      {123 - 1}
      {NaN}
      <h1>String</h1>
      {'abc'}
      {`hello ${100 - 5}`}
      <h1>Boolean</h1>
      {true}
      {false}
      <h1>null</h1>
      {null}
      <h1>undefined</h1>
      {undefined}
      <h1>Array</h1>
      {[1, 2, 3, 4]}
      <h1>Object(error!)</h1>
      {/* 會有中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h1>Function</h1>
      {() => {
        console.log(123)
      }}
    </>
  )
}

export default App
