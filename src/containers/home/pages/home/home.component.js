import React, { Component } from 'react';
import { Howl } from 'howler';
import { ListGroup } from 'reactstrap';
import PlayListComponent from '../../components/play-list/play-list.component';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convertListSong: [],
            listSongs: []
        };
        this.state.listSongs = [
            { title: "anh khong niu keo 2", artist: "Ask Again", howl: null, display: true, duration: 0},
            { title: "chi con mot dem cuoi", artist: "Ask Again", howl: null, display: true , duration: 0},
            { title: "sau tat ca", artist: "Ask Again", howl: null, display: true , duration: 0},
        ];
        this.state.title = 'React Music Player';
    }

    componentDidMount() {
        let newState = [];
        this.state.listSongs.forEach((track, i) => {
            let file = track.title.replace(/\s/g, "_");
            track.howl = new Howl({
                src: [`/files/${file}.mp3`],
                html5: true,
                format: ['mp3']
            });
            track.howl.once('load', function(){
                track.duration = track.howl.duration();
                newState.push(track);
            });
        });
        this.setState({ convertListSong : newState });
    }

    render() {
        const { convertListSong } = this.state;
        convertListSong.map((data, i) => {
            return (
                <PlayListComponent key={i} data={data} />
            )
        });

        return (
            <ListGroup>
                { convertListSong }
            </ListGroup>
        )
    }
}

export default HomeComponent;
