import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imageurl,newsurl}=this.props
    return (
      <>
    <div class="card" style={{width: "18rem"}}>
    <img src={!imageurl?"https://fdn.gsmarena.com/imgroot/news/23/08/apple-ipad-pro-2024/-952x498w6/gsmarena_000.jpg":imageurl} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">{title}...</h5>
    <p class="card-text">{description}...</p>
    <a href={newsurl} target="" class="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </>
    )
  }
}
