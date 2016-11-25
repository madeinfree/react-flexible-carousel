import React, { Component } from 'react'

class ThumbsItem extends Component {
  render() {
    const thumbs_special_position = this.props.thumbs_special_position
    const _thumbs_item_style = Object.assign({
      float: thumbs_special_position ? 'none' : 'left',
      width: thumbs_special_position ? 60 : this.props.width,
      height: this.props.height || 60,
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      opacity: this.props.isAction ? 1 : 0.3
    }, this.props.thumbs_item_style)
    return (
      <div
        ref={ node => this.item = node } /* eslint no-return-assign: 0 */
        style={ _thumbs_item_style }
        onClick={ () => this.props.handleChangeThumbsID(this.props.idx) }>{null}</div>
    )
  }
}

export default ThumbsItem
