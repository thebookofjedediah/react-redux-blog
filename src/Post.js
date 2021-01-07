import React, { useState } from 'react';
import { Paper, Typography, Button, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddPost from './AddPost';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center"
    },
    subheading: {
        padding: "1rem 0",
        textAlign: "center"
    },
    container: {
        paddingTop: "2rem",
        paddingBottom: "2rem"
    }
  }));

export default function PostView() {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { posts } = useSelector(store => store);
    const { postId } = useParams();
    const post = posts[postId];
    const classes = useStyles();

    const deleteHandler = () => {
        dispatch({
            type: 'DELETE_POST',
            id: postId
        })
        history.push('/')
    }

    if (post) {
        return (
            <>
            <Paper elevation={3}>
                <Container className={classes.container}>
                    <Typography className={classes.title} variant="h2">{post.title}</Typography>
                    <Typography className={classes.subheading} variant="subtitle1"><i>{post.description}</i></Typography>
                    <Typography variant="body1">{post.body}</Typography>
                </Container>
                <Button onClick={deleteHandler} color="secondary">Delete This Post</Button>
                <Button onClick={() => setEditMode(!editMode)}>Edit This Post</Button>
            </Paper>
            {editMode && <AddPost postEdit={post} postEditId={postId} />}
            </>
        )
    } else history.push('/')
    return null;
}