export default class Video{
    id: number
    title: string
    channelName: string
    videoId: string
    resourceLink: string
    channelLogo: string

    constructor(rawData: any){
        this.id = rawData.id || ''
        this.title = rawData.title || ''
        this.channelName = rawData.channel.channel_name || ''
        this.videoId = rawData.video_id || ''
        this.resourceLink = rawData.resource_link || ''
        this.channelLogo = rawData.channel.logo || ''
    }

    getId(): number{
        return this.id
    }

    setId(id: number){
        this.id = id
    }

    getTitle(): string{
        return this.title
    }

    getChannelName(): string{
        return this.channelName
    }

    getVideoId(): string{
        return this.videoId
    }

    setTitle(title: string){
        this.title = title
    }

    setChannelName(channelName: string){
        this.channelName = channelName
    }

    setVideoId(videoId: string){
        this.videoId = videoId
    }

    getResourceLink(): string{
        return this.resourceLink
    }

    setResourceLink(resourceLink: string){
        this.resourceLink = resourceLink
    }

    getChannelLogo(): string{
        return this.channelLogo
    }

    setChannelLogo(channelLogo: string){
        this.channelLogo = channelLogo
    }
}
