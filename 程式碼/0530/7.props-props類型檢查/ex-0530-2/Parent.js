import Child from './Child'

function Parent() {
  return (
    <>
      <Child />
      <Child text="Hello" fullName="Amy" />
      <Child text={123} fullName={123213} />
    </>
  )
}

export default Parent
