import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function TitleList(){
    const classes = useStyles();
    const { posts } = useSelector(store => store)
    const postsArr = [];
    for (const [key, value] of Object.entries(posts)) {
        postsArr.push({id: key, ...value})
    }

  return (
        <>
        {postsArr.map(post => (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} size="small" to={`/${post.id}`}>Read This Post</Button>
            </CardActions>
          </Card>
        ))}
        </>
  )
}