import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@/shared/ui';

export const MenuButton = ({color}: {color: string}) => {
    return(
        <IconButton>
            <MenuIcon style={{color: color, transition: 'color 5s ease'}} />
        </IconButton>
    )
}