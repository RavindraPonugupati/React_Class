import React, {Component} from 'react';
import TableHeader  from './headerComponent';
import TableBody from './bodyComponent';

class Table extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <table className="table table-bordered">
                <TableHeader headerValues={this.props.header} />
                <TableBody bodyValues={this.props.body} />
            </table>
        );
    }
}

export default Table;







