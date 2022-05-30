function Child(props) {
  console.log(props)
  const { text, fullName, color } = props

  return (
    <>
      {fullName}, {text}, {color}
    </>
  )
}

export default Child
