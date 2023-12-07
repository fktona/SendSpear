"use client"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
// import SaveIcon from '@mui/icons-material/Save';
// import SendIcon from '@mui/icons-material/Send';
import { ButtonProps } from '@/types'

const Button: React.FC <ButtonProps > = ({children 
  , variant, presentStyle, loading, className ,
   onClick , type , disabled , id , size}) => {
  return (
    <div>
    <Box sx={{ '& > button': { m: 1 }}}>
        <LoadingButton
          size={size}
          onClick={onClick}
          sx={{ height: '100%', background:"silver",  p:{x: 2 , y:2 }, m:3  }}
          color='primary'
          variant='contained'
          loading={loading}
          variant={variant}	
          disabled={disabled}
        >
          <span>{children}</span>
        </LoadingButton>
</Box>
    </div>
  )
}
export default Button


 