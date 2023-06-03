import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12d64e37af3b4855b06701c6831c5cfc&pageSize=${this.props.pageSize}&page=1`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: ParsedData.articles,
      totalArticles: ParsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12d64e37af3b4855b06701c6831c5cfc&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      articles: ParsedData.articles,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12d64e37af3b4855b06701c6831c5cfc&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page + 1,
      articles: ParsedData.articles,
    });
  };

  render() {
    console.log(1);
    return (
      <div className="container my-4">
        <h1 className="text-center" style={{margin:'35px 0px'}} >News App - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        {!this.state.loading &&
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source}
                />
              </div>
            );
          })}
        </div>}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            type="button"
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalArticles / this.props.pageSize) <=
              this.state.page
            }
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
