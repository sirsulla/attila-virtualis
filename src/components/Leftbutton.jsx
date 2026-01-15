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
        mb: 3,
        alignSelf: 'flex-start',
        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        gap: 1,
        fontFamily: 'Montserrat'
      }}
    >
      <img src={arrowIcon} alt="back" style={{ width: '60px' }} />
      Vissza
    </Button>
  );
}
