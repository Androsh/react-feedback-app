
import PropTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#3CB371'
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
