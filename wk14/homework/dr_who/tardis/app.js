class DivOne extends React.Component {
  render () {
      const {newTardis, newProp} = this.props;
      return (
          <div id="divOne">
              <DivTwo newTardis={newTardis} newProp={newProp} />
          </div>
      )
  }
}

class DivTwo extends React.Component {
  render () {
      const { newTardis, newProp } = this.props;
      return (
          <div id="divTwo">
              <DivThree newTardis={newTardis} newProp={newProp} />
              <DivThree newTardis={newTardis} newProp={newProp} />
          </div>
      )
  }
}

class DivThree extends React.Component {
  render () {
      const { newTardis, newProp } = this.props;
      return (
          <div id="divThree">
              <h3 onClick={newProp}>{newTardis.name}</h3>                
          </div>
      )
  }
}

class App extends React.Component {
  state = {
      tardis: {
          name: 'Time and Relative Dimension In Space',
          caps: false
      }
  }
  changeIt = () => {
      if (this.state.tardis.caps) {
          this.setState({
              tardis: {
                  name: this.state.tardis.name.toLowerCase(),
                  caps: false
              }
          })
      } else {
          this.setState({
              tardis: {
                  name: this.state.tardis.name.toUpperCase(),
                  caps: true
              }
          })
      }
  }
  render () {
      return (
          <div id="container">
              <DivOne newTardis={this.state.tardis} newProp={this.changeIt} />
          </div>
      )
  }
}

ReactDOM.render( <App />, document.querySelector('.container'));