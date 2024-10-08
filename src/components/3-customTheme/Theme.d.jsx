import {ThemeOptions} from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles'{
    interface Theme{
        status:{
            danger:string
        }
    }
    interface ThemeOptions{
        status:{
            danger: React.CSSProperties['color']
        }
    }
    interface Palette{
        neutral?:import('@mui/material').PaletteColor
    }
    interface PaletteOptions{
        neutral?: PaletteColorOptions
    }
    
}