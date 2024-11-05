
import { Box } from '@mui/material';
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box sx={{backgroundColor:'lightgray'}}>
      <Navbar/>
      <Homepage/>
    </Box>
  );
}

export default App;
