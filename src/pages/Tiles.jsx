import './Tiles.css';
import {
  Dialog,
  IconButton,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

import sl1 from '../images/slimages/sl1_Torzitottkoponya.png';
import sl2 from '../images/slimages/sl2_Becsiszablyamasol-0.png';
import sl3 from '../images/slimages/sl3_Nr003_v_fej.png';
import sl4 from '../images/slimages/sl4_PietroasaTreasure.png';
import sl5 from '../images/slimages/sl5_PaczkaFerenc_Attilanasz1884.jpg';
import sl6 from '../images/slimages/sl6_KohlmannLipot_Attilahunkiraly1836.jpg';

export default function Tiles({ open, onClose}) {
  const navigate = useNavigate();

  const items = [
    { id: 1, title: 'I. Attila világa – a Hun Birodalom és környezete', body: ' ', image: sl1 }, //  Attila világa – a Hun Birodalom és környezete
    { id: 2, title: 'II.', body: ' ', image: sl2 }, //  A hadisten kardja: a legenda és a tárgyak
    { id: 3, title: 'III.', body: ' ', image: sl3 }, //  A hun király nyugati percepciója: Attila, az Isten ostora
    { id: 4, title: 'IV.', body: ' ', image: sl4 }, //  Attila lakomája
    { id: 5, title: 'V.', body: ' ', image: sl5 }, //  Attila halála
    { id: 6, title: 'VI.', body: ' ', image: sl6 }, //  Attila mint a magyarok (h)őse
  ];

  const goToPage = (id) => {
    onClose();
    navigate(`/card/${id}`);
  };

  return (

    <Dialog 
      open={open}
      onClose={onClose}
      fullScreen
      maxWidth={false}
      PaperProps={{
        sx: {
          height: '100%',
          //backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backgroundColor: 'rgba(0,0,0,0.7)',
          //color: 'rgba(0, 0, 0, 1)',
          color: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(6px)'
        }
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'white',
          zIndex: 10
        }}
      >
        <CloseIcon />
      </IconButton>

      <Container className="section-tiles tiles-description">
        <h2>Üdvözöljük az Attila virtuális kiállítás honlapján</h2>
        <p> <center> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
        <p> <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
      </Container>

      <Container className='tiles-theme' sx={{ py: 10 }}>
        <Typography
          variant="h4"
          align="center"
          color="white"
          gutterBottom
        >
          Válassz témát
        </Typography>

        <Grid className='tiles-cards' container spacing={1} sx={{ mt: 4 }}>
          {items.map((it) => (
            <Grid onClick={() => goToPage(it.id)} key={it.id} size={{ xs: 12, sm: 6, md: 12 }}>
              <Card
                sx={{
                  height: 70,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Background image */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${it.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)'
                  }}
                />

                <CardContent
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexGrow: 1
                  }}
                >
                  <Typography variant="h5">{it.title}</Typography>
                  <Typography variant="body2">{it.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Dialog>
  );
}