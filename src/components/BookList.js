import React, {Component} from 'react';

class BookList extends Component {
    render() {
        const style={
            border:"1px solid red",
            borderRadius:"20px"
        }
        return (
            <div style={style}>
                <ul className="list-group">
                    <li className="list-group-item active" aria-current="true">
                        <h1 onClick={this.props.change}>
                            BookName:{this.props.name}
                        </h1>

                    </li>
                    <li className="list-group-item">Writer :{this.props.writer} </li>
                    <input type={"text"} onChange={this.props.input} defaultValue={this.props.name}/>
                </ul>
            </div>
        );
    }
}

export default BookList;