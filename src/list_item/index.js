import React, { Component } from "react";
import Item from "./item";

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
      <li key={item.id} onClick={() => this.showArticle(item.id)}>
        <Item title={item.title} urlToImage={item.urlToImage} />
      </li>
    );
  }

  render() {
    const articles = this.props.stories;
    var listArticles = articles.map(this.createItems);
    return <ul className="side">{listArticles}</ul>;
  }
}

export default ListItem;
