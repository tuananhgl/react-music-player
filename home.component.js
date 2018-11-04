import React, { Component } from 'react';
import { Howl } from 'howler';
import { ListGroup } from 'reactstrap';
import PlayListComponent from '../../components/play-list/play-list.component';

class HomeComponent extends Component {

    listSongs;

    constructor(props) {
        super(props);
        this.state = {};
        this.listSongs = [
            { title: "AnhKhongNiuKeo2", artist: "Ask Again", howl: null, display: true },
            { title: "ChiConMotDemCuoi", artist: "Ask Again", howl: null, display: true },
            { title: "SauTatCa", artist: "Ask Again", howl: null, display: true },
        ];
    }

    componentWillMount() {
        this.listSongs.forEach((track) => {
            let file = track.title.replace(/\s/g, "_");
            track.howl = new Howl({
                src: [`./${file}.mp3`]
            })
        });
        console.log(this.listSongs);
    }

    render() {
        console.log(this.listSongs);
        const listSongsRender = this.listSongs.map((data, i) => {
            return (
                <PlayListComponent key={i} data={data} />
            )
        });

        return (
            <ListGroup>
                { listSongsRender }
            </ListGroup>
        )
    }
}

export default HomeComponent;
