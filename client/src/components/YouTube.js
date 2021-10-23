import { Component } from 'react';
import YouTube from 'react-youtube';

class youTube extends Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    render() {

        const {videoId} = this.props

        return( <YouTube 
                videoId={videoId}
                onReady={this._onReady} 
                />
            )
        }
}

        export default youTube