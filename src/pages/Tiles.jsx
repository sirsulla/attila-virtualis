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
import { useState } from 'react';

import sl1 from '../images/slimages/sl1_Torzitottkoponya.png';
import sl2 from '../images/slimages/sl2_Becsiszablyamasol-0.png';
import sl3 from '../images/slimages/sl3_Nr003_v_fej.jpg';
//import sl3 from '../images/slimages/III.MNM_ET_C#1897.34.18.#Nr527_v_1200.png';
import sl4 from '../images/slimages/sl4_PietroasaTreasure.png';
import sl5 from '../images/slimages/sl5_PaczkaFerenc_Attilanasz1884.jpg';
import sl6 from '../images/slimages/sl6_KohlmannLipot_Attilahunkiraly1836.jpg';

export default function Tiles({ open, onClose}) {
const navigate = useNavigate();
const [activeTile, setActiveTile] = useState(null);

  const items = [
    { id: 1, title: 'Attila világa – a Hun Birodalom és környezete', body: ' ', image: sl1 }, //  Attila világa – a Hun Birodalom és környezete
    { id: 2, title: 'A hadisten kardja: a legenda és a tárgyak', body: ' ', image: sl2 }, //  A hadisten kardja: a legenda és a tárgyak
    { id: 3, title: 'A hun király nyugati percepciója: Attila, az Isten ostora', body: ' ', image: sl3 }, //  A hun király nyugati percepciója: Attila, az Isten ostora
    { id: 4, title: 'Attila lakomája', body: ' ', image: sl4 }, //  Attila lakomája
    { id: 5, title: 'Attila halála', body: ' ', image: sl5 }, //  Attila halála
    { id: 6, title: 'Attila mint a magyarok (h)őse', body: ' ', image: sl6 }, //  Attila mint a magyarok (h)őse
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
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          //backgroundColor: 'rgba(0,0,0,0.7)',
          color: 'rgba(0, 0, 0, 1)',
          //color: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(6px)'
        }
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={onClose}
        //size="large"
        sx={{
          position: 'absolute',
          top: 8,
          right: 28,
          color: 'black',
          zIndex: 10
        }}
      >
        <CloseIcon />
      </IconButton>

      <Container className="section-tiles tiles-description" sx={{paddingTop: 5, paddingBottom: 0, textAlign: 'center'}}>
        <h2>Üdvözöljük az Attila virtuális kiállítás honlapján</h2>
        <p> <center> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
        <p> <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
      </Container>

      <Container className='tiles-theme' sx={{ py: 0, minHeight: 650}}> {/*700 , 650 */} 
        <Typography
          variant="h4"
          align="center"
          color="black"
          gutterBottom
        >
          Válassz témát
        </Typography>

          <Grid
            className="tiles-cards"
            container
            direction="column"
            sx={{
              //height: 550, // 600
              height: 550,
              overflow: 'hidden'
            }}
          >
          {items.map((it) => {
            const isActive = activeTile === it.id;
          
            const flexGrow =
              activeTile === null
                ? 1
                : isActive
                ? 15   // aktív helyet kap
                : 0.2; // inaktív összenyomódik
          
            return (
              <Box
                key={it.id}
                sx={{
                  flexGrow,
                  //transition: 'flex-grow 0.4s ease',
                  //transition: 'flex-grow 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transition: 'flex-grow 0.8s ease-in-out',
                  minHeight: 10,     // biztonsági alsó korlát a soroknak - 50
                  overflow: 'hidden'
                }}
              >
              
          <Card
            onMouseEnter={() => setActiveTile(it.id)}
            onMouseLeave={() => setActiveTile(null)}
            onClick={() => goToPage(it.id)}
            sx={{
              height: '100%',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
                  {/* Background image */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${it.image})`,
                      //backgroundSize: isActive ? '100% auto' : 'cover',
                      backgroundSize: isActive ? '100% auto' : '100% auto',
                      backgroundRepeat: 'no-repeat',
                      //backgroundPosition: isActive ? 'center top' : 'center',
                      backgroundPosition: 'center',
                      filter: isActive ? 'brightness(1)' : 'brightness(0.6)',
                      transition: 'all 0.4s ease',
                    }}
                  />
        
                  <CardContent
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      color: 'white',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      //justifyContent: isActive ? 'top' : 'top',
                      justifyContent: 'center',
                      px: 3,
                      height: '100%',
                      opacity: activeTile && !isActive ? 0.4 : 1,
                      transition: 'opacity 0.3s ease',
                      maxHeight: 50 // Az inaktív sorok méretét szabályozza, inkább ez befolyásolja mint a minHeight - 50
                    }}
                  >
                  
                  <Typography
                  variant="h6"
                  sx={(theme) => ({
                  fontSize: isActive ? theme.typography.h4.fontSize : theme.typography.h6.fontSize,
                  lineHeight: isActive ? theme.typography.h4.lineHeight : theme.typography.h6.lineHeight,
                  transition: 'font-size 0.5s ease, line-height 0.5s ease'
                  })}>
                  
                  {it.title}
                  </Typography>
                  
                    {/*isActive && (
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        {it.body}
                      </Typography>
                    )*/}
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </Dialog>
  );
}