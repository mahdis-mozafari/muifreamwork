import { Button , Stack } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
export default function Buttons() {
    return(
<Stack direction="row" spacing={2}>
<Button variant="text" disabled sx={{paddingY: '0.5rem', paddingX: '2rem' }}>Text</Button>
<Button variant="contained" startIcon={<PersonIcon/>} sx={{paddingY: '0.5rem',paddingX: '2rem' }}>Contained</Button>
<Button variant="outlined" target="_blank" href="http://www.google.com" sx={{paddingY: '0.5rem', paddingX: '2rem'}}>Outlined</Button>
</Stack>
    )
}