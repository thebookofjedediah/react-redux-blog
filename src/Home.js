import React from 'react';
import { Typography } from '@material-ui/core'
import TitleList from './TitleList';

const Home = () => {

    return (
        <>
          <Typography variant="h3">
              Blog List
          </Typography>
          <TitleList />
        </>
    )
}

export default Home;