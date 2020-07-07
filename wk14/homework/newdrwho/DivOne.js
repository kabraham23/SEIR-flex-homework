class DivOne extends React.Component {
    render() {
        return (<div onClick={this.props.changeIt} className="div-one">
            <h3>{this.props.tardis.name}</h3>
        </div>);
    }
}
