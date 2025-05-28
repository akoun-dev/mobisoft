import PropTypes from 'prop-types'

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`container-africa mx-auto px-6 md:px-8 py-12 md:py-16 ${className}`}>
      {children}
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default PageLayout
