import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [];
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async updateNews(page)
  {
    // console.log(this.state.page);
    // this.setState({ loading: true });
    let url= `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7a3c2b747e744da78b5bd14e40cfa428&page=${
      page
    }&pageSize=${this.props.itemsPerPage}`
    // console.log(url);
    let news_api = await fetch( url
    );
    // console.log(this.state.page);
    let news_response = await news_api.json();
    // console.log(news_response);
    // this.setState({ page: this.state.page + 1 })
    this.setState({
      articles: this.state.articles.concat(news_response.articles),
      totalArticles: news_response.totalResults,
      page:page,
    });

  }
  async componentDidMount() {
    await this.updateNews(1)
    this.setState({loading:false})
  }
  constructor(props) {
    super(props);
    document.title=`News Monkey - ${this.capitalizeFirstLetter(this.props.category)}`
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalArticles: 0,
    };
  }
  fetchMoreData=async()=>
  {
    await this.updateNews(this.state.page+1);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalArticles}
          loader={<Spinner className="my-3" />}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    storyUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </InfiniteScroll>
      </div>
    );
  }
}

export default News;
