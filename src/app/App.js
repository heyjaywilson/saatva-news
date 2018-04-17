import React, { Component } from "react";
import ArticleList from "../article_list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>SAATVA NEWS</header>
        <ArticleList />
      </div>
    );
  }
}

export default App;
