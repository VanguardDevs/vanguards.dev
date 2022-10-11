import { styled } from '@mui/material/styles';

const FigureContainer = styled('figure')(() => ({
    position: 'absolute',
    zIndex: '-1',
    width: '100%',
    height: '100%',
    margin: '0 auto'
}))

const Video = styled('video')(() => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover'
}))

const VideoContainer = () => (
    <FigureContainer>
        <Video src={require('../assets/videos/intro.mp4')} loop autoPlay muted />
    </FigureContainer>
)

export default VideoContainer;