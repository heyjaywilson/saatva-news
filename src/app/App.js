import React, { Component } from "react";
import ArticleList from "../article_list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img
            src="https://www.saatva.com/images/header-logo.png"
            alt="saatva logo"
          />
          <span>NEWS</span>
        </header>
        <ArticleList />
      </div>
    );
  }
}

export default App;
