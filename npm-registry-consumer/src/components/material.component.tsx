import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";


export interface MaterialLayoutComponentProps {
    name: string;
}

// const useStyles = makeStyles(theme => ({
//     root: {
//       height: '100vh',
//       backgroundColor: 'blue',
//       [theme.breakpoints.up('sm')]: {
//         backgroundColor: 'red',
//       },
//       [theme.breakpoints.up('md')]: {
//         backgroundColor: 'green',
//       },
//       [theme.breakpoints.up('lg')]: {
//         backgroundColor: 'orange',
//       },
//       [theme.breakpoints.up('xl')]: {
//         backgroundColor: 'cyan',
//       },
//     },
//   }));

const styles = {
    itemleft: {
        width: "390px",
        height: "300px",
        border: "1px solid black",
        marginLeft: '17vh',
        background: 'orange'
    },
    itemcenter: {
        width: "390px",
        height: "300px",
        border: "1px solid black",
        // marginLeft: '0vh',
        // marginRight: '0vh',
        marginLeft: 'auto',
        background: 'green'
    },
    itemright: {
        width: "390px",
        height: "300px",
        border: "1px solid black",
        marginRight: '40vh',
        background: 'blue'
    }
};

const gridStyles = {
    // paddingLeft: '10vh',
    // paddingRight: '10vh',
    // marginTop: 2,
    // marginLeft: "10vh",
    // marginRight: "10vh",
    //maxWidth: 50,
    border: '1px solid red',

};

const MaterialLayoutComponent: React.FC<MaterialLayoutComponentProps> = ({ name }) => {
    return (
        <>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={8} lg={12}>
                    <Paper style={{ height: "40vh", background: "lightgrey" }} />
                </Grid>
                <Grid item lg={4} sm={4} style={{ marginTop: '-60px' }}>
                    <Paper style={styles.itemleft} />
                </Grid>
                <Grid item lg={4} sm={4} p={0} style={{ marginLeft: '-45px', marginTop: '-60px' }}>
                    <Paper style={styles.itemcenter} />
                </Grid>
                <Grid item lg={4} sm={4} style={{ marginTop: '-60px' }}>
                    <Paper style={styles.itemright} />
                </Grid>
                <Grid item lg={4} sm={4}>
                    <Paper style={styles.itemleft} />
                </Grid>
                <Grid item lg={4} sm={4} style={{ marginLeft: '-45px' }}>
                    <Paper style={styles.itemcenter} />
                </Grid>
                <Grid item lg={4} sm={4}>
                    <Paper style={styles.itemright} />
                </Grid>
                <Grid item lg={4} sm={4}>
                    <Paper style={styles.itemleft} />
                </Grid>
            </Grid>
        </>
    );
}

export default MaterialLayoutComponent;