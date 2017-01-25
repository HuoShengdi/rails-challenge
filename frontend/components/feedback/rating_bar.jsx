import React, {PropTypes} from 'react'

class RatingBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rating: 3
    }
  }

  handleClickValue(value){
    return (e)=>{
        this.setState({rating: value});
        this.props.updateRating(value);
    }
  }

  render () {

    const stars = [];
    for(let i = 1; i <= 5; i++){
      let filled = !(i > this.state.rating);
      stars.push(
        <span onClick={this.handleClickValue(i)} className={'rating-star' + (filled ? " filled" : ' empty')} key={i}>
          {filled ? "\u2605" : "\u2606"}
        </span>
      )
    }
    return (
      <div>
        {'Rating: '}
        {stars}
      </div>
    )
  }
}

export default RatingBar
