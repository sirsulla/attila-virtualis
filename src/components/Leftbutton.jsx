import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import arrowIcon from './featheredarrowleft.jpg';

export default function Leftbutton({ to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      // Check if the 'to' prop contains a hash anchor
      if (to.includes('#')) {
        const [path, hash] = to.split('#');
        // Navigate to the path with state to open the Tiles dialog
        navigate(path, { state: { openTiles: true } });
        // Scroll to the element after a small delay to ensure page is rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        navigate(to);
      }
    } else {
      navigate(-1);
    }
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        mb: { xs: 2, sm: 2.5, md: 3 },
        ml: { xs: -1, sm: -1.5, md: -2 },
        alignSelf: 'flex-start',
        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        gap: { xs: 0.3, sm: 0.4, md: 0.5 },
        fontFamily: 'Montserrat',
        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
      }}
    >
      <img src={arrowIcon} alt="back" style={{ width: 'clamp(30px, 8vw, 60px)', height: 'auto' }} />
      Vissza
    </Button>
  );
}
