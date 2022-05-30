import PropTypes from 'prop-types'

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

Child.propTypes = {
  fullName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Child
