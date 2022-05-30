function Child(props) {
  console.log(props)

  return (
    <>
      {props.fullName}, {props.text}
    </>
  )
}

export default Child
