import React, { useContext } from 'react'

const ContextTest = React.createContext('test');

class ContextMessage extends React.Component {
  render() {
    return (
      <div>
        <ContextTest.Provider value="This is a test">
          <ClassMessage />
          <FunMessage />
          <HookMessage />
        </ContextTest.Provider>
      </div>
    )
  }
}

// Class

class ClassMessage extends React.Component {


  static contextType = ContextTest;
  render() {
    return (
      <h3>{this.context}</h3>
    )
  }

}

function FunMessage() {

    return (
      <ContextTest.Consumer>
        {value => <h3>{value}</h3>}
      </ContextTest.Consumer>
      
    )  

}

function HookMessage() {
  const value = useContext(ContextTest);

  return(
    <h3>{value}</h3>
  )
}

export default ContextMessage;