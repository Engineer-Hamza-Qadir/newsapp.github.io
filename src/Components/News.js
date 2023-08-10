import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner1 from "./Spinner1";

export const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /*
  constructor(props) {
    super(props);
    console.log("this is a constructor");
    state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${capitalizeFirstLetter(props.category)}- News Monkey`;
  }
  */

  // async updateNews(){
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c5772f7b11645af97962e4ff11997b3&page=${state.page}&pageSize=${props.pageSize}`;
  //   setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,

  //   });

  // }

  //async componentDidMount() {

  /* useEffect( () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c5772f7b11645af97962e4ff11997b3&page=1pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
    setLoading(false);
  }, [loading,totalResults,articles]);
*/

  
useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
     setLoading(true);
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c5772f7b11645af97962e4ff11997b3&page=1pageSize=${props.pageSize}`);
    
    // convert the data to json
    const parsedData = await data.json();
console.log(parsedData);
    // set state with the result
    setTotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
    setLoading(false);
    
  };

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);
}, []);



  const handleprebtn = async () => {
    console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=9c5772f7b11645af97962e4ff11997b3&page=${
      page - 1
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setPage((prevState) => prevState - 1);
    setArticles(parsedData.articles);
    setLoading(false);

    // setState({page:state.page-1})
    // updateNews();
  };
  const handlenextbtn = async () => {
    if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=9c5772f7b11645af97962e4ff11997b3&page=${page + 1}&pageSize=${
        props.pageSize
      }`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();

      console.log(parsedData);
      setPage((prevState) => prevState + 1);
      setArticles(parsedData.articles);
      setLoading(false);
    }
    //  setState({ page: state.page + 1 });
    // updateNews();
  };

  return (
    <div className="container my-2">
      <h1 className="text-center" style={{ margin: "15px 0px" }}>
        News-Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner1 />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          onClick={handleprebtn}
          class="btn btn-dark my-2"
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          onClick={handlenextbtn}
          class="btn btn-dark my-2"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
