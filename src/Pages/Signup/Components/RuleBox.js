import React, { Component } from 'react';

class RuleBox extends Component {
  constructor(props){
    super(props)
  };

  render() {
    const { contents, name, key, checked, onclick} = this.props;
    return (
      <div className="AgreeSubCheck">
        <input 
          key={key}
          type="checkbox"
          checked={checked}
          name={name}
          onClick={onclick}
        />
        <p>{contents}</p>
      </div>
    )
  }
}

export default RuleBox;