import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

const useStyles = makeStyles(() => ({
    div: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
    },
    palette:{
        type: 'dark'
    }
}));

const CustomPagination = ({setPage, numOfPages = 10}) => {
    const classes = useStyles()

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    }

    return (
        <div className={classes.div}>
            <ThemeProvider theme={darkTheme}>
                <Pagination className={classes.palette} color='primary' count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)}/>
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination