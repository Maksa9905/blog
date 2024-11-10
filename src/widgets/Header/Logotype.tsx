import { getRandomColor } from "@/shared/lib/getRandomColor";
import { useEffect, useState } from "react";
import JavaScriptIcon from '@mui/icons-material/JavascriptSharp';
import { Stack, Typography } from "@mui/material";

export const Logotype = ({children, color}: {children: string, color: string}) => {
    return(
        <Stack direction='row' alignItems='center'>
            <JavaScriptIcon style={{
            backgroundColor: color,
            transition: 'background-color 5s ease',
            marginRight: '10px',
            fontSize: '36px'
            }} />
            <Typography style={{
                color: color,
                transition: 'color 5s ease',
                fontFamily: 'var(--font-jersey)'
            }} variant="h1">{children}</Typography>
        </Stack>
    ) 
}