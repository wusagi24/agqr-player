import * as React from 'react';
import * as videojs from 'video.js';
import 'videojs-flash';

import '../../node_modules/video.js/dist/video-js.css';

type VideoPlayerProps = videojs.PlayerOptions;

export class VideoPlayer extends React.Component<VideoPlayerProps | undefined, {}> {
  private player: videojs.Player | null;
  private videoNode: any;

  constructor(props: VideoPlayerProps | undefined) {
    super(props);
    this.player = null;
  }

  public componentDidMount() {
    this.player = videojs(
      this.videoNode,
      this.props,
      () => {
        console.log('onPlayerReady', this); /* tslint:disable-line:no-console */
      },
    );
  }

  public componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  public render() {
    return (
      <div data-vjs-player={true}>
        <video
          ref={node => this.videoNode = node}
          className="video-js vjs-default-skin"
        />
      </div>
    );
  }
}

export default VideoPlayer;
