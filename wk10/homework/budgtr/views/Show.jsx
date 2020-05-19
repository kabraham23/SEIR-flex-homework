const React = require('react');

class Show extends React.Component {
    render(){
        const budget = this.props.budget;
        return (
            <div className="container">
                <h1>Show Page</h1>
                <p>{budget.date}</p>
                <p>{budget.name}</p>
                <p>{budget.amount}</p>
            </div>
        );
    }
}

module.exports = Show;