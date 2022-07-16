import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StoreContext from '../context/store/StoreContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ShopingCart = ({ showShopingCart, setShowShopingCart }) => {
    const { shopingCart } = useContext(StoreContext);

    console.log(shopingCart);

    return (
        <div>
            <Modal
                open={ showShopingCart }
                onClose={ () => setShowShopingCart(false) }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Resumen de compras:
                    </Typography>

                    {
                        (!shopingCart.length) 
                            ? (
                                <>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center', margin: 20 }}>
                                        ¡Aún no has agregado nada al carrito! :D
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <TableContainer component={ Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Descripción</TableCell>
                                                    <TableCell align="right">Cantidad</TableCell>
                                                    <TableCell align="right">Precio unitario</TableCell>
                                                    <TableCell align="right">Precio total de prendas</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>

                                                {
                                                    shopingCart.map((row) => (
                                                        <>
                                                            <TableRow
                                                                key={row._id}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                        <TableCell component="th" scope="row">{ row.name }</TableCell>
                                                                        <TableCell align="right">{ row.numberProducts }</TableCell>
                                                                        <TableCell align="right">${ Number(row.price).toFixed(2) }</TableCell>
                                                                        <TableCell align="right">${ Number(row.numberProducts * row.price).toFixed(2) }</TableCell>
                                                            </TableRow>
                                                        </>
                                                    ))
                                                }

                                                <TableRow>
                                                    <TableCell component="th" scope="row" style={{ fontWeight: 'bold', fontSize: 15 }}>Total a pagar:</TableCell>
                                                    <TableCell align="right"></TableCell>
                                                    <TableCell align="right"></TableCell>
                                                    <TableCell align="right" style={{ fontWeight: 'bold', fontSize: 15 }}>${ Number(shopingCart.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.numberProducts), 0)).toFixed(2) }</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                            )
                    }
                </Box>
            </Modal>
        </div>
    );
}