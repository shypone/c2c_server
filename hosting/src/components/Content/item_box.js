import React from "react";

export default class ItemBox extends React.Component {
  render() {
    return (
      <div className="Item">
        <img className=""src={this.props.item.image} />
        <p className="">@{this.props.item.title}</p>
      </div>
    );
  }
}

