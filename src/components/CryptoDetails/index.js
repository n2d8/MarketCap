import React, { Component } from 'react';

class CryptoDetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      id: -1,
      name: '',
      rank: ''
    }
  }

  render() {
    return(
      <div>
        entered a new page
      </div>
    );
  }
}

export default CryptoDetails;
