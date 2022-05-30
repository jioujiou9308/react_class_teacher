import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // 傳給ChildA的狀態值
  const [pData, setPData] = useState('parent data')

  // 準備接收ChildB的狀態值
  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB資料:{dataFromChildB}</p>
      <ChildA pData={pData} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}

export default Parent
