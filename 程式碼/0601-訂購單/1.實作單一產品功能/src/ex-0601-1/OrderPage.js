import './OrderPage.css'
import OrderList from './components/OrderList/OrderList'
import Summary from './components/Summary'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  // {
  //   id: 2,
  //   name: '黑色 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/1GrakTl.jpg',
  //   price: 400,
  // },
]

function OrderPage() {
  const [count, setCount] = useState(1)

  const totalNumber = () => {
    return count
  }

  const totalPrice = () => {
    return count * products[0].price
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList setCount={setCount} count={count} products={products} />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  )
}

export default OrderPage
