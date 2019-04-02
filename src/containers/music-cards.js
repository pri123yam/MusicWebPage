import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './music-cards.css';

class MusicCards extends Component {
    CreateMusicCards() {
        return this.props.songs.map((item) => {
            if(item.active===true)
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
        songs: state.filteredsongs
    };
}

export default connect(mapStateToProps)(MusicCards);
