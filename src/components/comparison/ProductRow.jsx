import PropTypes from 'prop-types'

const ProductRow = ({ 
  image, 
  name, 
  subtitle, 
  description, 
  price, 
  type, 
  selected, 
  onToggle 
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-ui-surface transition-colors">
      <div className="col-span-1">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
          className="w-5 h-5 rounded border-ui-border text-primary-500 focus:ring-primary-500"
        />
      </div>
      
      <div className="col-span-2 flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-8 h-10 bg-black/20 rounded"></div>
        </div>
        <div>
          <div className="font-medium text-ui-text-primary">{name}</div>
          <div className="text-sm text-ui-text-muted">{subtitle}</div>
        </div>
      </div>
      
      <div className="col-span-4 text-ui-text-secondary">
        {description}
      </div>
      
      <div className="col-span-2">
        <span className="font-semibold text-ui-text-primary">{price}</span>
      </div>
      
      <div className="col-span-2">
        <span className="px-3 py-1 bg-ui-surface rounded-full text-sm text-ui-text-secondary">
          {type}
        </span>
      </div>
      
      <div className="col-span-1 text-right">
        <button className="px-4 py-1.5 bg-primary-500 text-white text-sm rounded-lg hover:bg-primary-600 transition-colors">
          Comparer
        </button>
      </div>
    </div>
  )
}

ProductRow.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
}

export default ProductRow
