import React, { useEffect, useState } from 'react';
import { Grid, TextField, Paper, Button } from '@mui/material';

function SearchBar({ getVideos }) {

    const [searchData, setSearchData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getVideos(searchData);
    }

    const handleChange = (e) => {
        setSearchData(e.target.value);
    }

    useEffect(() => {
        getVideos('react');
    },[])

    return (

        <Paper>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    placeholder="Search"
                    id="standard-basic"
                    variant="standard"
                    onChange={handleChange}>
                    {searchData}
                </TextField>
            </form>
        </Paper>
    )
}

export default SearchBar;