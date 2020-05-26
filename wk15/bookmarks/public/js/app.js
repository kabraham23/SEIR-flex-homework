const BookmarkItem = (props) => {
    return (
        <li>
            {props.bookmark.title}
        </li>
        <li>
            {props.bookmark.url}
        </li>
    )
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
            body: JSON.stringify({ })////////////////////
        })
    }


    render() {
        return (
            <div>
                <h1>My Favorite Websites</h1>
                <button onClick={this.getData}>Get Bookmarks</button>
                <form onSubmit={this.handleSubmit}></form>
                <label htmlFor="title">Title</label>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));