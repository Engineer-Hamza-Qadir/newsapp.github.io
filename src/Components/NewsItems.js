import React, { Component } from "react";

// export class NewsItems extends Component {
//   render() {                                   {class based comp}
    const NewsItems =(props)=>{
  
    // let { title, description, imgUrl, newsUrl, author, date } = this.props;
     //proprs pass karney ka syntax ha ye class based comp me
      let { title, description, imgUrl, newsUrl, author, date } = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imgUrl
                ? "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDgvZTVmY2E5MzMtZmE0Zi00NjZmLTljNDItODZmMTczMDBjNGI2LmpwZw==.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author?"Unknown": author} On {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
// }

export default NewsItems;
