const React = require('react');

class Index extends React.Component {
    render(){
        return (
            <>
            <link rel="stylesheet" href="/normalize.css"></link>
            <link rel="stylesheet" href="/skeleton.css"></link>
                    <div>
                    {Budget.map((budget, index) => {
                        return (
                    <h1>I'm writing a budget</h1>
                    <table>
                        <tr>expenses</tr>
                        <td>data</td>
                        <a href="">Name</a>
                    </table>
                        )
                    })}
                </div>
            </>
        )
    }
}