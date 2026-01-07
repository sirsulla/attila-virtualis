import './LandingPage.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Tiles from './Tiles';
import startImage from '../images/landing-page/start.png';

import sl1 from '../images/slimages/sl1_Torzitottkoponya.png';
import sl2 from '../images/slimages/sl2_Becsiszablyamasol-0.png';
import sl3 from '../images/slimages/sl3_Nr003_v_fej.png';
import sl4 from '../images/slimages/sl4_PietroasaTreasure.png';
import sl5 from '../images/slimages/sl5_PaczkaFerenc_Attilanasz1884.jpg';
import sl6 from '../images/slimages/sl6_KohlmannLipot_Attilahunkiraly1836.jpg';

export default function LandingPage() {
  const navigate = useNavigate();
  const items = [
    { id: 1, title: 'I. Attila világa – a Hun Birodalom és környezete', body: ' ', image: sl1 }, //  Attila világa – a Hun Birodalom és környezete
    { id: 2, title: 'II.', body: ' ', image: sl2 }, //  A hadisten kardja: a legenda és a tárgyak
    { id: 3, title: 'III.', body: ' ', image: sl3 }, //  A hun király nyugati percepciója: Attila, az Isten ostora
    { id: 4, title: 'IV.', body: ' ', image: sl4 }, //  Attila lakomája
    { id: 5, title: 'V.', body: ' ', image: sl5 }, //  Attila halála
    { id: 6, title: 'VI.', body: ' ', image: sl6 }, //  Attila mint a magyarok (h)őse
  ];

  // Open Tiles dialog if coming from a back navigation with state
  useEffect(() => {
    if (location.state?.openTiles) {
      setExploreOpen(true);
    }
  }, [location.state]);

  const handleExploreClick = () => {
    setExploreOpen(true);
    // Move focus away from the button to avoid aria-hidden conflict
    document.activeElement?.blur();
  };

  return (
    <div className = "home-container">
      <section className="section section-home">
        <img src={startImage} alt="Start logo" className="start-image" />
        {<a className="home_button" href="#description">No lámsza!</a>}
        {/*<div className="scroll-down">&#8595;</div>*/}
      </section>
      <section id="description" className="section section-description">
        <h2>Üdvözöljük az Attila virtuális kiállítás honlapján</h2>
        <p> <center> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
        <p> <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
        <p> <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center></p>
      <Container sx={{ py: 2 }}></Container>
        {/* ide jöhetnek a csempék */}
        <h2>Válassz témát!</h2>
      <Container sx={{ py: 4 }}> {/*6*/} 
        {/*<Typography variant="h4" gutterBottom align="center">
          Attila
        </Typography>*/}

    <Grid container spacing={3}>
      {items.map((it) => (
        <Grid key={it.id} size={{ xs: 12, sm: 6, md: 2 }}>
          <Card
            sx={{
              height: 400,
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'  
            }}
          >
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
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 1, 
              }}
            >
              <Typography variant="h5">{it.title}</Typography>
              <Typography variant="body2">{it.body}</Typography>
            </CardContent>
            
            <Box sx={{ p: 2, zIndex: 1 }}>
              <Button fullWidth variant="contained" onClick={()=>goToPage(it.id)}>
                Open
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>

        {/*
        <Grid container spacing={3}>
          {items.map((it, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {it.title}
                  </Typography>
                  <Typography variant="body2">{it.body}</Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button fullWidth variant="contained" onClick={()=>goToPage(it.id)}>Open</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>*/}
      </Container>
    </section>
    </div>
  );
}