import * as React from 'react';

import { VideoPlayer } from '../containers/VideoPlayer';

export const AgqrPlayer: React.SFC<{}> = () => {
  const videoOptions = {
    autoplay: true,
    controlBar: {
      progressControl: false,
      remainingTimeDisplay: false,
    },
    controls: true,
    flash: {
      swf: '/libs/video-js_5-2-0.swf',
    },
    preload: 'auto',
    sources: [
      {
        src: 'rtmp://fms-base1.mitene.ad.jp/agqr&aandg111',
        type: 'rtmp/mp4',
      },
    ],
    techOrder: ['flash'],
  };

  return (
    <VideoPlayer {...videoOptions} />
  );
};

export default AgqrPlayer;
