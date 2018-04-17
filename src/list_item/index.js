import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.createItems = this.createItems.bind(this);
  }

  showArticle(key) {
    this.props.showArticle(key);
  }

  createItems(item) {
    return (
      <li onClick={() => this.showArticle(item.id)} key={item.id}>
        {item.title}
      </li>
    );
  }

  render() {
    const articles = this.props.stories;
    var listArticles = articles.map(this.createItems);
    return <ul>{listArticles}</ul>;
  }
}

export default ListItem;
