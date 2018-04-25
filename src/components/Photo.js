import React from "react"

class Photo extends React.Component {
  constructor(){
    super()
    this.image
    this.username
    this.text
    this.commentsCount
  }

  render(){
    console.log(this.props.key)
    return (
      <div className="col-sm-3">
        <img src="http://via.placeholder.com/300x300" alt="something terrible" />
      </div>
      // <img src="https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg" alt="something terrible" />
    )
  }
}

export default Photo
