import React, {Component} from 'react';
import BookList from "./components/BookList";

class App extends Component {
    state={
        booklist:[
            {bookname:"one",writer:"one"},
            {bookname: "two",writer: "two"},
            {bookname: "three",writer: "three"}
        ]
    }

    changeData=(name)=>{
        this.setState({
            booklist:[
                {bookname:name,writer:"changeOne"},
                {bookname: "changeTwo",writer: "changeTwo"},
                {bookname: "changeThree",writer: "changeThree"},
                {bookname: "changeFour",writer: "changeFour"}
            ]
        })

    }

    changeDataWithInput=(event)=>{
        this.setState({
            booklist:[
                {bookname:event.target.value,writer:"changeOne"},
                {bookname: "changeTwo",writer: "changeTwo"},
                {bookname: "changeThree",writer: "changeThree"},
                {bookname: "changeFour",writer: "changeFour"}
            ]
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.changeData}>Change Data</button>
                <input type={"text"} onChange={this.changeDataWithInput}/>

                <BookList
                    name={this.state.booklist[0].bookname} writer={this.state.booklist[0].writer}/>

                <BookList name={this.state.booklist[1].bookname} writer={this.state.booklist[1].writer}/>

                {/*<BookList change={this.changeData} name={this.state.booklist[2].bookname} writer={this.state.booklist[2].writer}/>*/}

                <BookList
                    change={()=>this.changeData("salam")}
                    name={this.state.booklist[2].bookname}
                    writer={this.state.booklist[2].writer}
                />

                <BookList
                    input={this.changeDataWithInput}
                    name={this.state.booklist[2].bookname}
                    writer={this.state.booklist[2].writer}
                />


            </div>
        );
    }
}

export default App;