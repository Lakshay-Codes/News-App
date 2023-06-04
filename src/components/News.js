import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title =
      "News App-" + this.capitalizeFirstLetter(this.props.category);
  }
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page+1
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25b4de7685674528b986be9b10cdc3fc&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(ParsedData.articles),
      totalResults: ParsedData.totalResults,
      loading: false 
    });
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  async updatePage() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=25b4de7685674528b986be9b10cdc3fc&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({
      articles: ParsedData.articles,
      totalResults: ParsedData.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    this.updatePage();
    this.setState({
      page: this.state.page+1
    });
  }

  render() {
    console.log(1);
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          News App-Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        {
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length<this.state.totalResults}
            loader={(this.props.category==='general')? <h1> </h1> : <Spinner />}
          >
            <div className="container row">
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
            </div>
          </InfiniteScroll>
        }
      </ >
    );
  }
}
