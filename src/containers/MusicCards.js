import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './MusicCards.css';
import DisplaySongs from '../selectors/DisplaySongSelector';

export class MusicCards extends Component {
    render() {
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
}
function mapStateToProps(state) {
    return {
        songs: DisplaySongs(state)
    };
}

export default connect(mapStateToProps)(MusicCards);
