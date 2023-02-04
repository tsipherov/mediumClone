import LengContext from "../../LengContext";
import { Component } from "react";

class Page2 extends Component {
  render() {
    const leng = this.context.leng;
    // console.log(this.context);
    console.log(window.location);
    console.log(this.props);
    return <h2>Page2 lang={leng}</h2>;
  }
}

Page2.contextType = LengContext;

export default Page2;
