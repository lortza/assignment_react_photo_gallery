import React from "react"

class Photo extends React.Component {
  render(){
    const { image, username, commentCount, caption } = this.props
    return (
      <div className="col-sm-4">
        <div className="card card-body mb-3">
          <img src={image} alt={username} />
          <p>By: {username} <span className="comments">({commentCount} comments)</span></p>
          <p className="caption">{caption}</p>
          </div>
      </div>
    )
  }
}

export default Photo
