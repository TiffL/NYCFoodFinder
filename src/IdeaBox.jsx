import React, { Component } from 'react';

class IdeaBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: "false",
    }
  }


  render() {
    return (
      <div className="ideaBox" onClick={this.openCloseBox}>
        <h4>Idea Count: {this.props.ideas.length}</h4>
      </div>
    );
  }
}

export default IdeaBox;