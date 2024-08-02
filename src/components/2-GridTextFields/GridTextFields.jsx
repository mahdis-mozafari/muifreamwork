import { Button, Container, Grid, TextField, Typography } from "@mui/material";

export function Form() {
    return(
     <Container maxWidth="md">
     <Typography align={'center'}variant="h4" gutterBottom noWrap>
        create your accont
      </Typography>


<Grid container spacing={{ xs: 2, md: 1}} columns={{ xs: 4, sm: 4, md: 12 }} >
  {Array.from(Array(3)).map((_, index) => (
    <Grid item xs={10} sm={10} md={4} key={index} >
       <TextField variant="outlined" fullWidth />
    </Grid>
 ))}

{Array.from(Array(2)).map((_, index) => (
  <Grid item xs={4} sm={4} md={6} key={index}>
     <TextField  variant="outlined" fullWidth/>
  </Grid>
))}
  <Grid item xs={9 } sm={6} md={12}>
     <TextField multiline rows={3} variant="outlined" fullWidth
     />
  </Grid>
 
</Grid>
<br />
<Button variant="contained" size="large" fullWidth color="secondary" >
sign up 
</Button> 

      </Container>

)}