import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'

const VideoItem = ({ video,setVideoItem }) => {
    const { snippet = {} } = video;
    const { thumbnails: { high: { url = '#' } = {} } = {}, title = '', channelTitle = '' } = snippet;
    return (
        <Card
            sx={
                {
                    display: 'flex',
                    width: 350,
                    height: 150,
                    boxShadow: 'none',
                    borderRadius: 0,
                    padding: '10px',
                } 
            }
            className="vi-card-container"
            onClick={()=>setVideoItem(video)}
        >
            <CardMedia
                component="img"
                sx={
                    {
                        width: 151
                    }
                }
                image={url}
                alt="Image"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {channelTitle}
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    )
}

export default VideoItem;