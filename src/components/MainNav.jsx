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
        marginBottom:'25px',
        width: '100%',
        position:'fixed',
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100,
    },
    button: {
        color: 'white'
    },
    footer: {
        width: '100%',
        position:'fixed',
        height: '40px',
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 90,
    },
    footerContent: {
        fontFamily: 'Montserrat',
        color: 'white',
        display:'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icons: {
        paddingLeft:'20px'

    },
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
        <>
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
            <div className={classes.footer}>
                <div className={classes.footerContent}>
                    <p>Portfolio project made by Leandro Lopez</p>
                    <a className={classes.icons} href='https://www.linkedin.com/in/leandro-l%C3%B3pez-catalini-9628b21a2/' target='_blank' rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a className={classes.icons} href='https://github.com/leanwayne' target='_blank' rel='noreferrer'>
                        <i className='fab fa-github github'></i>
                    </a>
                </div>
            </div>
        </>
    );
};