import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '../components/Card';
import { Grid } from '@mui/material';
import Progress from '../components/Progress';
import StoreContext from '../context/store/StoreContext';
import { PaginationRounded } from '../components/Pagination';

export const Home = () => {
    const { checking, products } = useContext(StoreContext);
    
    return (
        <>
            {
                (!checking)
                    ? (
                        <>
                            <CssBaseline />
                            <Container sx={{ mt: 5, display: 'flex', flex: 1, flexDirection: 'column' }}>
                                <Grid container spacing={ 5 } sx={{ display: 'flex', flex: 1, flexDirection: 'row' }} >
                                    {
                                        (!products.length)
                                            ? (
                                                <h1 style={{ right: 500 }}>¡Aún no hay productos! :v</h1>
                                            ) : (
                                                products.map((product, i) => (
                                                    <Grid item xs={3} key={ i }>
                                                        <Card { ...product }/>
                                                    </Grid>
                                                ))
                                            )
                                    }
                                </Grid>

                                <div style={{ alignSelf: 'center', marginBottom: '2.5%' }}>
                                    <PaginationRounded />
                                </div>
                            </Container>                         
                        </>
                    ) : ( <Progress /> )
            }
        </>
    );
}
