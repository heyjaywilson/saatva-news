import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <h1>{this.props.title}</h1>
          <section>
            <img src={this.props.urlToImage} alt={this.props.title} />
          </section>
        </header>
        <main
          dangerouslySetInnerHTML={{ __html: this.props.long_description }}
        />
      </div>
    );
  }
}

export default Article;
