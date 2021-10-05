import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TvIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position:'fixed',
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100,
    },
    button: {
        color: 'white'
    }
});

export default function MainNav() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    let history = useHistory();

    useEffect(()=>{
        if(value === 0) history.push('/');
        if(value === 1) history.push('/movies');
        if(value === 2) history.push('/series');
        if(value === 3) history.push('/search');
    }, [value]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction className={classes.button} label='Trending' icon={<WhatshotIcon />} />
            <BottomNavigationAction className={classes.button} label='Movies' icon={<MovieIcon />} />
            <BottomNavigationAction className={classes.button} label='TV Series' icon={<TvIcon />} />
            <BottomNavigationAction className={classes.button} label='Search' icon={<SearchIcon />} />
        </BottomNavigation>
    );
};