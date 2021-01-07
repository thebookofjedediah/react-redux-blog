import React, { useState } from 'react';
import { Button, Typography, FormControl, Input, InputLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const INITIAL_FORM_STATE = {
        title: '',
        description: '',
        body: ''
    };
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormData((fdata) => ({
            ...fdata,
            [name]: value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_POST',
            post: {...formData},
            id: uuidv4()
        })
        history.push('/')
    }

    return (
        <>
            <Typography variant="h3">
                Add a Post
            </Typography>
            <form onSubmit={submitHandler}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input 
                        fullWidth 
                        id="title" 
                        name="title"
                        aria-describedby="my-helper-text" 
                        value={formData.title}
                        onChange={changeHandler}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input 
                        fullWidth 
                        id="description" 
                        name="description"
                        aria-describedby="my-helper-text" 
                        value={formData.description}
                        onChange={changeHandler}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="body">Body</InputLabel>
                    <Input 
                        fullWidth 
                        id="body" 
                        name="body"
                        aria-describedby="my-helper-text" 
                        multiline
                        rows={4}
                        variant="filled"
                        value={formData.body}
                        onChange={changeHandler}
                    />
                </FormControl>
                <Button type="submit">Submit</Button>
                <Link to="/">Cancel</Link>
            </form>
        </>
    )
}

export default AddPost;