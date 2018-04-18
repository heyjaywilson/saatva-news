import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <h1>{this.props.title}</h1>
          <section>
            <img src={this.props.urlToImage} alt={this.props.title} />
            <p className="share">
              <a href="https://www.facebook.com/saatva/">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="https://twitter.com/SaatvaMattress">
                <i className="fab fa-twitter-square" />
              </a>
              <a href="mailto:">
                <i className="fas fa-envelope-square" />
              </a>
            </p>
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
