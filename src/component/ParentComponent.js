import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greedParent = this.greedParent.bind(this);
    this.greedParent2 = this.greedParent2.bind(this);
  }

  // menggunakan props untuk mengirim ke children
  greedParent() {
    alert(`hello  ${this.state.parentName}`);
  }
  greedParent2(childName) {
    alert(`hello  ${this.state.parentName} ini dari ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent
          greedParent={this.greedParent}
          greedParent2={this.greedParent2}
        />
      </div>
    );
  }
}

export default ParentComponent;
