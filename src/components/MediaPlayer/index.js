import ReactAudioPlayer from 'react-audio-player'

import SongContexts from '../../SongContext/SongContexts'
import './index.css'

const MediaPlayer = () => (
  <SongContexts.Consumer>
    {contextValue => {
      const {oldSong} = contextValue
      return <ReactAudioPlayer src={oldSong} autoPlay controls />
    }}
  </SongContexts.Consumer>
)
export default MediaPlayer
