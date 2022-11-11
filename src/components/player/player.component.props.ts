import { YoutubeIframeRef } from "react-native-youtube-iframe"
import { Video } from "../../models"

export default interface PlayerProps{
    playing: boolean
    video: Video
}
