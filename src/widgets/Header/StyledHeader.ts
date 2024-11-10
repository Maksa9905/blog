'use client'
import theme from "@/shared/lib/theme";
import { Stack, Typography } from "@/shared/ui";
import styled from "@emotion/styled";

export const StyledHeader = styled(Stack)`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    background-color: ${theme.palette.grey[100]};
    border-bottom: 0.5px solid ${theme.palette.divider};
    color: ${theme.palette.text.primary};
    padding: 20px 10px;
    justify-content: space-between;
    align-items: center;
`

export const LogotypeTypography = styled(Typography)`
    font-family: var(--font-jersey);
    color: ${theme.palette.common.black};
    font-weight: 400;
`