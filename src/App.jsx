// import Buttons from "./components/1-AlignedButtons/AlignedButtons";
// import { Form } from "./components/2-GridTextFields/GridTextFields";
import { ThemeProvider ,createTheme,colors

 } from "@mui/material";
import { ThemeBox } from "./components/3-customTheme/Theme";


const theme = createTheme({
  status:{
      danger:'#ab003c'
  },
  palette:{
      secondary:{
          main:colors.orange[500]
      },
      neutral:{
        main:colors.grey[500],
        darker:colors.grey[700]
      }
  }
  })
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <ThemeBox/>
    </ThemeProvider>
  );
}
