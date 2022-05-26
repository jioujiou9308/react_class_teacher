import products from './data/products.json'

function App() {
  console.log(products)

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
