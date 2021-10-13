import React from 'react';
import './redLine.scss';

const getDistance = () => {
  const top = new Date().getHours() * 60 + new Date().getMinutes();
  return `${top}px`;
};

class RedLine extends React.Component {
  state = {
    top: getDistance(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        top: getDistance(),
      });
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const style = {
      top: this.state.top,
    };

    return (
      <div style={style} className="red-line">
        <span className="red-line__line"></span>
      </div>
    );
  }
}
export default RedLine;
