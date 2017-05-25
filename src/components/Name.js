import React, {Component} from 'react'

class Name extends Component {
  render(){
    return(<div className="inline">
        <p className="inline">{this.props.name}</p>
      </div>)
  }
}

export default Name;
