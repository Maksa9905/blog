'use client'

import { StyledHeader } from "./StyledHeader"
import { Logotype } from "./Logotype";
import { useEffect, useState } from "react";
import { getRandomColor } from "@/shared/lib/getRandomColor";
import { MenuButton } from "./MenuButton";

export const Header = ({logotype}: {logotype: string}) => {
    const [color, setColor] = useState('#4CAF50'); 
    
    useEffect(() => {
        const subscription = setInterval(() => {
            setColor(getRandomColor());
        }, 5000)
        return () => clearTimeout(subscription);
    }, [])

    return(
        <StyledHeader>
            <Logotype color={color}>{logotype}</Logotype>
            <MenuButton color={color} />
        </StyledHeader>
    )
}