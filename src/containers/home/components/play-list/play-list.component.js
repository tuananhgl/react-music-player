import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

class PlayListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <ListGroupItem>
                <div className='text-left'>
                    {this.props.data.title}
                </div>
                <div className='text-right'>
                    {this.props.data.duration}
                </div>
            </ListGroupItem>
        )
    }
}

export default PlayListComponent;