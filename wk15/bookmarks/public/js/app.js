const BookmarkItem = (props) => {
    <div>
    return (
        <li>
            {props.bookmark.title}
        </li>
        <li>
            {props.bookmark.url}
        </li>
    )
    </div>
}

class App extends React.Component {

    state = {
        bookmarks: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch('/bookmarks')
        .then(response => response.json())
        .then(data => this.setState({ bookmarks: data }))
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('/bookmarks', {
            body: JSON.stringify({ })
        })
    }


    render() {
        return (
            <div>
                <h1>My Favorite Websites</h1>
                <button onClick={this.getData}>Get Bookmarks</button>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.title} id="title" onChange={this.handleChange}  />
                    <input type="url" value={this.state.url} id="url" onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                
                

            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));