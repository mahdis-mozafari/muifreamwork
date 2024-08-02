import { Box,styled} from '@mui/material'




const StyledBox=styled(Box)(({theme})=>({
    height:'250px',
    width:'250px',
    backgroundColor:theme.palette.neutral?.main
}))
// const Styled2Box=styled(Box)(({theme})=>({
//     height:'250px',
//     width:'250px',
//     backgroundColor:theme.palette.secondary.main
// }))
// const Styled3Box=styled(Box)(({theme})=>({
//     height:'250px',
//     width:'250px',
//     backgroundColor:theme.palette.success.main
// }))
export function ThemeBox() {
    return(
        <>
<Box
sx={{height:'300px',
    width:'300px',
    bgcolor:'secondary.light'
}}></Box>
<Box></Box>
<Box></Box>

<StyledBox/>
{/* <Styled2Box/>
<Styled3Box/> */}
        </>
    )
}