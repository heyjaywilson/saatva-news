import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.changeActive = this.changeActive.bind(this);
  }

  changeActive() {
    this.setState({ isActive: true });
    console.log(this.state.isActive);
    this.state.isActive
      ? console.log(this.props.urlToImage)
      : console.log("no");
  }

  render() {
    return (
      <p
        onClick={() => this.changeActive()}
        style={{
          backgroundImage: this.state.isActive
            ? `url(${this.props.urlToImage})`
            : ""
        }}
      >
        {this.props.title}
      </p>
    );
  }
}

export default Item;
