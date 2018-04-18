import React, { Component } from "react";
import Item from "./item";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.createItems = this.createItems.bind(this);
  }

  showArticle(key) {
    this.props.showArticle(key);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  createItems(item) {
    return (
      <div
        className="nav-item"
        key={item.id}
        onClick={() => this.showArticle(item.id)}
      >
        <Item
          key={item.id}
          title={item.title}
          urlToImage={item.urlToImage}
          active={item.active}
        />
      </div>
    );
  }

  render() {
    const articles = this.props.stories;
    var listArticles = articles.map(this.createItems);
    return <nav className="side">{listArticles}</nav>;
  }
}

export default ListItem;

/** NOTE:
 * Add state to make temp active
 * TempActive -> Item -> Item renders as active when hovered
 */
