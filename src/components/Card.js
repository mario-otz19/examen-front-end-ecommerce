import { useState } from 'react'; 
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton'; 
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Modal from './Modal';

const ProductCard = ({ description, _id, img, name, price, quantity }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <Card sx={{ maxWidth: 300, marginBottom: 5 }}>
        <CardHeader
          action={
            <IconButton 
              aria-label="settings"
              onClick={ () => setShowModal(true) }
            >
              <VisibilityIcon />
            </IconButton>
          }
          title={ name }
          subheader={ `$${ price }` }
          about='lyhisclcvysvui'
        />

        <CardMedia
          component="img"
          image={ img }
          alt="Paella dish"
          onClick={ () => setShowModal(true) }
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Cantidad disponible: { quantity }
          </Typography> 
        </CardContent>
      </Card>
      
      <div>
        <Modal 
          product={{ description, _id, img, name, price, quantity }}
          showModal={ showModal }
          setShowModal={ setShowModal }
        />
      </div>
    </>
  );
}

export default ProductCard;