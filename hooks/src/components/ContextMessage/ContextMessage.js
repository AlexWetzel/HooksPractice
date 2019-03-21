import React from 'react'

const ContextTest = React.createContext('test');

class ContextMessage extends React.Component {
  render() {
    return (
      <div>
        <ContextTest.Provider value="This is a test">
          <Message />
        </ContextTest.Provider>
      </div>
    )
  }
}

class Message extends React.Component {


  static contextType = ContextTest;
  render() {
    return (
      <h3>{this.context}</h3>
    )
  }

}

export default ContextMessage;