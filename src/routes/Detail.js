import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (!location.state) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location.state);
    if (!location.state) {
      return null;
    } else {
      return <span>{location.state.title}</span>;
    }
  }
}

export default Detail;
