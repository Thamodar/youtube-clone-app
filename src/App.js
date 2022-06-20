import React, {useEffect, useState} from "react";
import { Grid } from '@mui/material';
import { SearchBar, VideoDetail, VideoList } from './components'
import axios from "axios";
import youtube from './apis/youtube-api';

    const App = () => {
    
        const [ videos, setVideos ] = useState([]);
        const [ onSelectVideo, setOnSelectVideo] = useState({});

        const getVideos = (keyword) => {
            youtube.get('search',{
                params:{
                    q:keyword,
                    part:'snippet',
                    key:'AIzaSyC-iD66CaBmJpJmzcpbUO-qahTYmDYZ0JU'
                }
            })
            .then((res) => {
                if(res.status === 200)
                {
                    setVideos(res.data.items);
                    setOnSelectVideo(res.data.items[0]);
                }
            })
        }

         const setVideoItem = async(video) => {
            await setOnSelectVideo(video);
        }

        return (
            <Grid container >
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={10}>
                        <SearchBar getVideos={getVideos} />
                    </Grid>
                </Grid>
                <Grid container xs={12}
                 >
                    <Grid item xs={8} style={{padding:'20px'}}>
                        <VideoDetail video={onSelectVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} setVideoItem={setVideoItem}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

export default App;