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
        sx: {/*
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          //backgroundColor: 'rgba(0,0,0,0.7)',
          color: 'rgba(0, 0, 0, 1)',
          //color: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(6px)'*/
              height: '100%',
              //backgroundColor: 'rgba(255, 255, 255, 0.65)',
              backgroundColor: 'rgb(255, 255, 255)',
              backdropFilter: 'blur(6px)',
              overflowY: {
              xs: 'auto',   // 📱 mobil: scroll
              //md: 'hidden', // 💻 desktop: nincs scroll
          }    
        }
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={onClose}
        //size="large"
        sx={{/*
          position: 'absolute',
          top: 8,
          right: 28,
          color: 'black',
          zIndex: 10 */
        position: 'fixed', // 👈 FONTOS
        top: { xs: 8, md: 16 },
        right: { xs: 12, md: 28 },
        zIndex: 1300
        }}
      >
        <CloseIcon />
      </IconButton>

      <Container className="section-tiles tiles-description" sx={{/*paddingTop: 5, paddingBottom: 0, textAlign: 'center'*/ pt: { xs: 7, md: 5 }, pb: { xs: 0.5, md: 0 }, textAlign: 'center', fontSize: {xs: '80%', md: '100%'}}}>
        <h2>Üdvözöljük az Attila virtuális kiállítás honlapján</h2>
        <p></p>
        <p>Attila az egyik legismertebb történelmi személyiség. Híre összeköti Európát és Ázsiát, az ókor végét és a középkort a mával. Megítélése kultúránként és koronként változik. Már saját korában isteni szférába emelkedett. Halála után másfél évszázaddal a keresztény gondolkodásban már az isteni büntetés eszköze, civilizációkat elpusztító, démoni lény, a gonosz megtestesítője, másfelől viszont az alattvalói közötti konfliktusokba belekeveredő ember, de legitimáló erővel bíró ősapa, mitikus hős is. Mai tudásunk szerint, ha az európai ókor végét és a középkor kezdetét egyetlen személy tevékenységéhez kellene kötnünk, Attila lenne az. E sokszínűséget a hagyomány hordozóinak sokfélesége okozta. A római szervezettség örököse, a nyugati egyház Attila és a hun hódítás pusztító aspektusait élte meg. Ennél összetettebb a kép a germán hagyományban, hiszen a Római Birodalom romjain kibontakozó középkori Európa germán elitjeinek első generációi többnyire Attila udvarában ismerték meg egymást, s a Hun Birodalom tette lehetővé felemelkedésüket.</p>
        <p>A legendák Attilájának története a mítoszképződés szabályait követi. A megszülető gyermek előbb isteni segítséggel hőssé válik, és elfoglalja méltó helyét a világban; mozgalmas életútja során döntő hatást gyakorol a világra, visszafordíthatatlanul megváltoztatja Európa képét. Végül hatalma csúcsán, váratlanul és tragikus körülmények között bukik el. Ez az emberi múlt ősi rétegeibe nyúló logika átsüt Attila történetén. A hadisten kardja révén hőssé válik, uralkodóként pusztító és teremtő erővel bír; hatalma zenitjén, lakomáján hódol előtte az egész világ. Bukása váratlan, egyeseknek megváltást, másoknak összeomlást hoz. Kiállításunk lépésről lépésre követi azt a máig tartó történetet, amelynek nyomán egy nomád birodalom utolsó, legsikeresebb, nagy uralkodójából másfél évezredre a nyugati civilizáció identitásának egyik alapköve, ezer évre pedig az Árpádok ősapja, a magyarok hőse lett. Attila évezredes mítosza ma is él. Befolyásolja, hogyan gondolkodunk Európa és Ázsia viszonyáról, a világban elfoglalt helyünkről; vagy akár a múltról, a magyarok eredetéről.</p>
      </Container>

      <Container className='tiles-theme' sx={{ py: 0, minHeight: {xs: 80, md: 10}}}> {/*700 , 650 */} 
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
              /*height: 550,
              overflow: 'hidden'*/
                  height: {
                xs: 440,  // 📱 mobil: tartalom diktál, 'auto' 450,
                md: 440,     // 💻 desktop: harmonika 550 , 530 , 490   , '35vh'
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
            : 0.1;
          
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
                  {/* Background image */}
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
                      sx={(theme) => ({
                        fontSize: isActive
                          ? { xs: "1.0rem", md: theme.typography.h4.fontSize }
                          : { xs: "0.8rem", md: theme.typography.h6.fontSize },
                        transition:
                          "font-size 0.5s ease, line-height 0.5s ease",
                      })}
                    >
                      {it.title}
                    </Typography>

                    {/*isActive && (
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        {it.body}
                      </Typography>

                      sx={(theme) => 
                        ({ 
                        fontSize: isActive ? theme.typography.h4.fontSize : theme.typography.h6.fontSize, 
                        lineHeight: isActive ? theme.typography.h4.lineHeight : theme.typography.h6.lineHeight, 
                        transition: 'font-size 0.5s ease, line-height 0.5s ease' 
                        })
                      
             const flexGrow =
              activeTile === null
                ? 1
                : isActive
                ? 15   // aktív helyet kap
                : 0.2; // inaktív összenyomódik
                        
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