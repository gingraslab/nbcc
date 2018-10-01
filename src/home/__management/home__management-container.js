import React, { Component } from 'react';

import HomeManagement from './home__management';

class ManagementContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managementIndex: 0,
    };
  }

  handleClick = (index) => {
    this.setState({
      managementIndex: index,
    });
  }

  render() {
    const {
      managementIndex,
    } = this.state;
    return (
      <HomeManagement
        handleClick={this.handleClick}
        managementIndex={managementIndex}
      />
    );
  }
}

export default ManagementContainer;
