class App extends React.Component {
    getQuestion = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    render() {
        return (
            <div>
                <input type="submit" value="Get Question" onClick={this.getQuestion} />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('.container'));