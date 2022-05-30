import ChildA from './ChildA'
import { useState } from 'react'

function Parent() {
  const [pData, setPData] = useState('parent data')

  return (
    <>
      <h1>Parent</h1>
      <ChildA pData={pData} />
    </>
  )
}

export default Parent
