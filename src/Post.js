import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "1rem 6rem",
        marginBottom: "3rem"
    },
    title: {
        textAlign: "center"
    },
    subheading: {
        padding: "1rem 0",
        textAlign: "center"
    }
  }));

export default function PostView() {
  const history = useHistory();
  const { posts } = useSelector(store => store)
  const { postId } = useParams();
  const post = posts[postId];
  const classes = useStyles();

    if (post) {
        return (
            <Paper className={classes.root} elevation={3}>
                <Typography className={classes.title} variant="h2">{post.title}</Typography>
                <Typography className={classes.subheading} variant="subtitle1"><i>{post.description}</i></Typography>
                <Typography variant="body1">{post.body}</Typography>
            </Paper>
        )
    } else history.push('/')
    return null;
}