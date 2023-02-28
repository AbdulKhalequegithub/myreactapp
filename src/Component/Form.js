import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputData: ""
        }
    }
    changeTodoInput=(event)=>{
        this.setState({inputData:event.target.value})
        console.log(this.state.inputData)
    }
    render() {
        return (
            <>
                <div className='container my-3'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <form>
                                <div className="mb-3">
                                    <h1>Todo App</h1>
                                    <input type="text" className="form-control" id="something" onChange={this.changeTodoInput} value={this.state.inputData} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

