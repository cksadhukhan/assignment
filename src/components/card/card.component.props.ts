import { Video } from "../../models"

export default interface CardProps{
    item: Video
    setCurrentIndex: (index: number) => void
}
