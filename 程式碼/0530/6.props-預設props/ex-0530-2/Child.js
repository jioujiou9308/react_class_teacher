function Child({ text, fullName }) {
  return (
    <>
      {fullName}, {text}
    </>
  )
}

Child.defaultProps = {
  fullName: 'Eddy',
  text: '沒給定',
}

export default Child
