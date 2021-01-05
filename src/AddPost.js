import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, FormControl, Input, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
      '& > *': {
        width: '25ch',
      },
    },
    paper: {
        padding: '40px 20px',
        marginTop: '2rem'
    }
  }));

const AddPost = () => {

    const classes = useStyles();

    return (
        <>
            <Typography variant="h3">
                Add a Post
            </Typography>
            <form>
                <FormControl fullWidth>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input 
                        fullWidth 
                        id="title" 
                        aria-describedby="my-helper-text" 
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input 
                        fullWidth 
                        id="description" 
                        aria-describedby="my-helper-text" 
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="body">Body</InputLabel>
                    <Input 
                        fullWidth 
                        id="body" 
                        aria-describedby="my-helper-text" 
                        multiline
                        rows={4}
                        variant="filled"
                    />
                </FormControl>
            </form>
        </>
    )
}

export default AddPost;