import { connect } from 'react-redux'
import { deleteImage } from '../actions'

import Images from '../components/Images'

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(deleteImage(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Images)
