import React, { Component } from 'react'
import ThumbsItem from './thumbs-item'

class Thumbs extends Component {
  _render_thumbs_items(thumbs_item_style) {
    const thumbs_per_page = this.props.thumbsPerPage || 5
    return this.props.urls.map((url, idx) => {
      const isAction = idx === this.props.actionID
      return (
        <ThumbsItem
          key={ `thumbs-item-${url}-${idx}` }
          thumbs_item_style={ thumbs_item_style }
          thumbs_special_position={ this.props.thumbs_special_position }
          isAction={ isAction }
          width={ this.props.listWidth / thumbs_per_page }
          height={ this.props.thumbs_special_position ? this.props.listHeight / thumbs_per_page : '' }
          url={ url }
          idx={ idx }
          handleChangeThumbsID={ this.props.handleChangeThumbsID } />
      )
    })
  }

  render() {
    const _wrapper_width = Math.ceil(parseInt(this.props.listWidth, 10) * this.props.urls.length)
    const _wrapper_height = Math.ceil(parseInt(this.props.listHeight, 10) * this.props.urls.length)
    const thumbs_per_page = this.props.thumbsPerPage || 5
    const thumbs_special_position = this.props.thumbs_special_position
    const thumbs_wrapper_style = Object.assign({
      width: thumbs_special_position ? 60 : this.props.listWidth,
      height: thumbs_special_position ? this.props.listHeight : '',
      overflow: 'hidden'
    }, this.props.thumbs_style)
    const _half_per_page = thumbs_per_page > 2 ? (thumbs_per_page / 2) : Math.floor(thumbs_per_page / 2)
    let thumbs_item_style = {
      width: thumbs_special_position ? 60 : _wrapper_width,
      height: thumbs_special_position ? _wrapper_height : '',
      transition: 'transform .3s',
      transform: this.props.actionID >= (_half_per_page) ?
        `translateX(-${Math.ceil(parseInt(this.props.listWidth / thumbs_per_page, 10) * (thumbs_per_page % 2 === 0 ? (this.props.actionID - _half_per_page) + 0.52 :
          Math.ceil((this.props.actionID - _half_per_page))))}px)` :
          'translateX(0px)'
    }
    if (thumbs_special_position) {
      thumbs_item_style = Object.assign({}, thumbs_item_style, {
        transform: this.props.actionID >= (_half_per_page) ?
          `translateY(-${Math.ceil(parseInt(this.props.listHeight / thumbs_per_page, 10) * (thumbs_per_page % 2 === 0 ? (this.props.actionID - _half_per_page) + 0.52 :
            Math.ceil((this.props.actionID - _half_per_page))))}px)` :
            'translateY(0px)'
      })
    }
    return (
      <div
        style={ thumbs_wrapper_style }>
        <div
          style={ thumbs_item_style }>
          { this._render_thumbs_items.call(this, this.props.thumbs_item_style) }
        </div>
      </div>
    )
  }
}

export default Thumbs
