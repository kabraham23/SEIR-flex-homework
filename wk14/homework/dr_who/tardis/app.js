changeIt = (text) =>{
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

class App extends React.Component {

    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('#container'));