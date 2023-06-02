import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalArticles: 0
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=12d64e37af3b4855b06701c6831c5cfc&pageSize=20&page=1";
    let data=await fetch(url);
    let ParsedData=await data.json();
    this.setState({
      articles: ParsedData.articles,
      totalArticles: ParsedData.totalResults
    })
  }

  handlePrevClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=12d64e37af3b4855b06701c6831c5cfc&pageSize=20&page=${this.state.page-1}`;
    let data=await fetch(url);
    let ParsedData=await data.json();
    this.setState({
      page : this.state.page-1,
      articles: ParsedData.articles
    }
    )
    console.log("handlePrevClick");
    
  }
  
  handleNextClick=async ()=>{
    console.log("handleNextClick");
    if(Math.ceil(this.state.totalArticles/20)>this.state.page){
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=12d64e37af3b4855b06701c6831c5cfc&pageSize=20&page=${this.state.page+1}`;
      let data=await fetch(url);
      let ParsedData=await data.json();
      this.setState({
          page : this.state.page+1,
          articles: ParsedData.articles
        }
      )
  }
    
  }



  render() {
    console.log(1);
    return (
      <div className="container my-4">
        <h1>News App - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page===1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
        <button  type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}
