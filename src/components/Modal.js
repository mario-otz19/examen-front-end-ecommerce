import React, { useContext, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StoreContext from '../context/store/StoreContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  height: 700 ,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ product, showModal, setShowModal }) {
  const { addProductsShoppingCart } = useContext(StoreContext);

  const [quantity, setQuantity] = useState(0);
  
  const { description, _id, img, name, price, quantity: totalProducts } = product;
  const pharagraphStyle = { fontSize: 13, fontWeight: 'bold' };

  const closeProductDetails = () => {
    setShowModal(false);
    setQuantity(0);
  }

  const addProducts = (numberProducts) => {
    const { quantity, ...rest } = product;
    const newProduct = { ...rest, _id, numberProducts }

    addProductsShoppingCart(newProduct);
    closeProductDetails();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ showModal }
        onClose={ closeProductDetails }
        closeAfterTransition
        BackdropComponent={ Backdrop }
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={showModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              { name }
            </Typography>

            <div style={{ margin: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <img 
                alt="Paella dish"
                src={ img }
                height={ 550 }
                width={ 400 }
              />  

              <div style={{ marginLeft: 40 }}>
                <p style={{ fontSize: 30, fontWeight: 'bold' }}>$MXN{ Number(price).toFixed(2) }</p>
                <p>Disponibles: { totalProducts - quantity }</p>

                <p style={ pharagraphStyle }>Envío gratuito</p>
                <p style={ pharagraphStyle }>Devolución Gratis</p>
                <p style={ pharagraphStyle }>Descripción:</p> 
                <p>{ description }/2022</p> 
                
                  {
                    (totalProducts === 0) 
                      ? (
                          <>
                            <Typography id="transition-modal-title" variant="h5" component="h2"
                                style={{ marginTop: 50, fontWeight: 'bold' }}>
                                ¡Producto no disponible! :v
                            </Typography>                           
                          </>
                        ) : (
                          <>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                              <Button 
                                variant="contained"
                                color="primary"
                                disabled={ (quantity === 0) }
                                onClick={ () => setQuantity((c) => c - 1) }
                                style={{ marginTop: 30 }}
                                startIcon={ <RemoveCircleOutlineIcon fontSize='large'/> }
                                size='large'
                              ></Button>
                              
                              <Typography id="transition-modal-title" variant="h6" component="h2"
                                style={{ marginLeft: 20, marginTop: 35 }}>
                                { quantity }
                              </Typography>

                              <Button 
                                variant="contained"
                                color="primary"
                                disabled={ (quantity === totalProducts) }
                                onClick={ () => setQuantity((c) => c + 1) }
                                style={{ marginLeft: 20, marginTop: 30 }}
                                startIcon={ <ControlPointIcon fontSize='large'/> }
                                size='large'
                              ></Button>
                            </div>

                            <Button 
                              color="primary"
                              disabled={ totalProducts === 0 }
                              onClick={ () => addProducts(quantity) }
                              style={{ marginLeft: 90, marginTop: 30 }}
                              startIcon={ <AddShoppingCartIcon fontSize='inherit'/> }
                              size='large'
                              variant="contained"
                            >Agregar</Button>
                          </>
                        )
                  }

                  {
                    (quantity > 0) && (
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Typography id="transition-modal-title" variant="h5" component="h2"
                            style={{ marginTop: 50 }}>
                            Total: 
                        </Typography>

                        <p style={{ marginLeft: 5, marginTop: 47, fontSize: 25 }}>${ price * quantity }</p>
                      </div>
                    )
                  }
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
