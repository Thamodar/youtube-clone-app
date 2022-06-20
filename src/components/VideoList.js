import React from 'react';
import { Box } from '@mui/material';
import VideoItem from './VideoItem';

const VideoList = ({videos=[], setVideoItem}) => {

    return (
        <Box sx={{overflowX:'auto',padding: '10px',}}>
        { videos && 
          videos.map((video) => <VideoItem video={video} setVideoItem={setVideoItem}/>)}
        </Box>
    )
}

export default VideoList;