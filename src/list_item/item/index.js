import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempActive: false
    };
  }

  toggleTemp() {
    this.setState(prevState => {
      return { tempActive: !prevState.tempActive };
    });
  }

  render() {
    const active = {
      backgroundImage: `url(${this.props.urlToImage})`,
      color: "rgb(255,255,255)",
      textShadow:
        "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    };
    return (
      <h3
        onMouseEnter={() => {
          this.toggleTemp();
        }}
        onMouseOut={() => {
          this.toggleTemp();
        }}
        style={this.props.active || this.state.tempActive ? active : {}}
      >
        {this.props.title}
      </h3>
    );
  }
}

export default Item;
