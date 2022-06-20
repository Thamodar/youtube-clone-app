import React from 'react';
import { Paper, Typography, Grid } from '@mui/material'

const VideoDetail = ({ video }) => {
    const { id: { videoId = '' } = {}, snippet: { title = '', channelTitle = '', description = '' } = {} } = video;
    console.log('videoDetail ', videoId);
    // const videoId = onSelectVideo;
    return (
        video ?
            <>
                <Grid container rowSpacing={1.5}>
                    <Grid item>
                        <Paper style={{ padding: '10px' }}>
                            {
                                videoId &&
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                    title="youtube Clone and Download"
                                    width="780"
                                    height="450"
                                >
                                </iframe>

                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant='h5'>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>
                            {channelTitle}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </> : null
    )
}

export default VideoDetail;