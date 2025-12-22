import './LandingPage.css';
import startImage from '../images/landing-page/start.png';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const items = [
    { id: 1, title: 'I. Attila világa – a Hun Birodalom és környezete', body: ' ' },
    { id: 2, title: 'II. A hadisten kardja: a legenda és a tárgyak', body: ' ' },
    { id: 3, title: 'III. A hun király nyugati percepciója: Attila, az Isten ostora', body: ' ' },
    { id: 4, title: 'IV. Attila lakomája', body: ' ' },
    { id: 5, title: 'V. Attila halála', body: ' ' },
    { id: 6, title: 'VI. Attila mint a magyarok (h)őse', body: ' ' },
  ];

  const goToPage = (id) => {
    navigate('/card/${id}')}

  return (
    <div className = "home-container">
      <section className="section section-home">
        <img src={startImage} alt="Start logo" className="start-image" />
        {/*<div className="scroll-down">&#8595;</div>*/}
      </section>
      <section className="section section-description">
        <h2>Üdvözöljük az Attila virtuális kiállítás honlapján</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* ide jöhetnek majd a csempék */}
        <h2>Válassz témát!</h2>
<Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        Attila
      </Typography>

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
      </Grid>
    </Container>
      </section>
    </div>
  );
}