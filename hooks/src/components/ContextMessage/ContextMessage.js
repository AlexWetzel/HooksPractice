import React from 'react'

const ContextTest = React.createContext('test');

class ContextMessage extends React.Component {
  render() {
    return (
      <div>
        <ContextTest.Provider value="This is a test without using hooks">
          <Message />
        </ContextTest.Provider>
      </div>
    )
  }
}

// class Message extends React.Component {


//   static contextType = ContextTest;
//   render() {
//     return (
//       <h3>{this.context}</h3>
//     )
//   }

// }

function Message() {

    return (
      <ContextTest.Consumer>
        {value => <h3>{value}</h3>}
      </ContextTest.Consumer>
      
    )  

}

export default ContextMessage;