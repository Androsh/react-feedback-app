import { FaTimes } from 'react-icons/fa'
import PropTypes from "prop-types"
import Card from "./shared/Card"

const FeedbackItem = ({item, handleDelete}) => {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="#333" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
