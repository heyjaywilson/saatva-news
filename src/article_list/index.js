import React, { Component } from "react";
import axios from "axios";
import Article from "../article";
import ListItem from "../list_item";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      loading: true,
      clickedStory: 0
    };
    this.showArticle = this.showArticle.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json")
      .then(response => {
        let i = 0;
        let stories = [];
        response.data.articles.forEach(function(article) {
          stories.push({
            id: i,
            title: article.title,
            urlToImage: article.urlToImage,
            description: article.description,
            long_description: article.long_description
          });
          i = i + 1;
        });
        this.setState({ stories: stories, loading: false });
      });
  }

  showArticle(key) {
    this.setState({ clickedStory: key });
  }

  renderLoading() {
    return <div>loading...</div>;
  }

  renderPosts() {
    return (
      <div className="container">
        <ListItem stories={this.state.stories} showArticle={this.showArticle} />
        {this.renderArticle(this.state.clickedStory)}
      </div>
    );
  }

  renderArticle(num) {
    return (
      <Article
        className="main"
        title={this.state.stories[num].title}
        urlToImage={this.state.stories[num].urlToImage}
        description={this.state.stories[num].description}
        long_description={this.state.stories[num].long_description}
      />
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? this.renderLoading() : this.renderPosts()}
      </div>
    );
  }
}

export default ArticleList;
