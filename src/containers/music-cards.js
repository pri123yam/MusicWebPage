import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './music-cards.css';
import displaySongs from '../selectors/DisplaySongSelector';

class MusicCards extends Component {
    CreateMusicCards() {
        return this.props.songs.map((item) => {
            return (
                <div key={item.id} className='Card'>
                    <Card>
                        <CardImg className='CardImage'  src={item.thumbnail} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>name:{item.name}</CardTitle>
                            <CardSubtitle>genre:{item.genre}</CardSubtitle>
                            <CardText>artist:{item.artist}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                {this.CreateMusicCards()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        songs: displaySongs(state)
    };
}

export default connect(mapStateToProps)(MusicCards);
