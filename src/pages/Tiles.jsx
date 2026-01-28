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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { tilesPageData } from '../data/tilespagedata';
import Showmore from '../components/ShowmoreTiles';

import sl1 from '../images/slimages/sl1_Torzitottkoponya.jpg';
import sl2 from '../images/slimages/sl2_Becsiszablyamasol-0.jpg';
import sl3 from '../images/slimages/sl3_Nr003_v_fej.jpg';
//import sl3 from '../images/slimages/III.MNM_ET_C#1897.34.18.#Nr527_v_1200.png';
import sl4 from '../images/slimages/sl4_PietroasaTreasure.jpg';
import sl5 from '../images/slimages/sl5_PaczkaFerenc_Attilanasz1884.jpg';
import sl6 from '../images/slimages/sl6_KohlmannLipot_Attilahunkiraly1836.jpg';

export default function Tiles({ open, onClose}) {
const navigate = useNavigate();
const [activeTile, setActiveTile] = useState(null);
const theme = useTheme();
const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const tilesHeader = tilesPageData;

  const items = [
    { id: 1, title: 'ATTILA KORA – A RÉGÉSZETI ÉS TÖRTÉNETI VALÓSÁG', body: ' ', image: sl1 }, //  Attila világa – a Hun Birodalom és környezete
    { id: 2, title: 'A HADISTEN KARDJA', body: ' ', image: sl2 }, //  A hadisten kardja: a legenda és a tárgyak
    { id: 3, title: 'ISTEN OSTORA', body: ' ', image: sl3 }, //  A hun király nyugati percepciója: Attila, az Isten ostora
    { id: 4, title: 'ATTILA LAKOMÁJA', body: ' ', image: sl4 }, //  Attila lakomája
    { id: 5, title: 'ATTILA HALÁLA ÉS TEMETÉSE', body: ' ', image: sl5 }, //  Attila halála
    { id: 6, title: 'ATTILA, AZ ŐS ÉS HŐS', body: ' ', image: sl6 }, //  Attila mint a magyarok (h)őse
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
              backgroundColor: 'rgb(255, 255, 255)',
              backdropFilter: 'blur(6px)',
              overflowY: {
              xs: 'auto',   // 📱 mobil: scroll
              //md: 'hidden', // 💻 desktop: nincs scroll
          }    
        }
      }}
    >

      <Container 
        className='teszt'
        sx={{
          marginLeft: 0,
          marginRight: 0,
        }}
       >

      <IconButton
        onClick={onClose}
        //size="large"
        sx={{
        position: 'fixed', // 👈 FONTOS
        top: { xs: 8, md: 16 },
        right: { xs: 12, md: 28 },
        zIndex: 1300
        }}
      >
        <CloseIcon />
      </IconButton>

    <Container className="section-tiles tiles-description" sx={{ pt: { xs: 7, md: 6.5 }, pb: { xs: 0.5, md: 0 }}}>
        <h2 class="tileH2Title">{tilesHeader.title}</h2>
        <p></p>

  <span class='buy-ticket'>Váltsa meg <a href="https://jegy.mnm.hu/programok/reszlet/attila-_1768552366"  style={{ color: 'rgb(204, 143, 0)', textDecoration: 'none' }}>jegyét</a> még ma az elmúlt 40 év legjelentősebb <a href="https://mnm.hu/kiallitasok/attila" style={{ color: 'rgb(204, 143, 0)', textDecoration: 'none' }}>Attila</a>  kiállítására!</span>
  <Showmore 
    sx={{ display: 'inline-block' }} 
    text={tilesHeader.text} 
    sentenceLimit={tilesHeader.numberofsentences} 
  />

      </Container>

      <Container className='tiles-theme' sx={{ py: 0, minHeight: {xs: 80, md: 10}}}>  
        <Typography
          variant="h5"
          fontWeight='600'
          align="center"
          sx={{ mb: 4 }}
        >
          Válasszon témát!
        </Typography>

          <Grid
            className="tiles-cards"
            container
            direction="column"
            sx={{
              //height: 550, // 600 
              height: {
                xs: 440,  
                md: 640, //670 , 681    
              },
              overflow: {
                xs: 'visible',
                md: 'hidden',
              },
            }}
          >
          {items.map((it) => {
            const isActive = activeTile === it.id;
          
          const flexGrow = !isDesktop
            ? 1
            : activeTile === null
            ? 1
            : isActive
            ? 15
            : 0.7;
          
            return (
              <Box
                key={it.id}
                sx={{
                  flexGrow,
                  //transition: 'flex-grow 0.4s ease',
                  //transition: 'flex-grow 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transition: "flex-grow 0.8s ease-in-out",
                  minHeight: 10, // biztonsági alsó korlát a soroknak - 50
                  overflow: "hidden",
                }}
              >
                <Card
                  onMouseEnter={() => setActiveTile(it.id)}
                  onMouseLeave={() => setActiveTile(null)}
                  onClick={() => goToPage(it.id)}
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: 0,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${it.image})`,
                      //backgroundSize: isActive ? '100% auto' : 'cover',
                      backgroundSize: isActive ? "100% auto" : "100% auto",
                      backgroundRepeat: "no-repeat",
                      //backgroundPosition: isActive ? 'center top' : 'center',
                      backgroundPosition: "center",
                      filter: isActive ? "brightness(1)" : "brightness(0.6)",
                      transition: "all 0.4s ease",
                    }}
                  />

                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      color: "white",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      //justifyContent: isActive ? 'top' : 'top',
                      justifyContent: "center",
                      px: 3,
                      height: "100%",
                      opacity: activeTile && !isActive ? 0.4 : 1,
                      transition: "opacity 0.3s ease",
                      maxHeight: 10, // Az inaktív sorok méretét szabályozza, inkább ez befolyásolja mint a minHeight - 50
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={() => ({ // theme
                        fontSize: isActive
                          ? { xs: "1.0rem", md: "1.5rem" } // theme.typography.h4.fontSize
                          : { xs: "0.8rem", md: "1.1rem" }, // theme.typography.h6.fontSize
                        transition:
                          "font-size 0.5s ease, line-height 0.5s ease",
                      })}
                    >
                      {it.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Grid>
      </Container>
      </Container>
    </Dialog>
  );
}