import {useRouter} from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styles from '../styles/Toolbar.module.css';
import img from '../public/Discord-Logo+Wordmark-White.png';
import Image from 'next/image';

export const ToolbarComp = () => {
    const router = useRouter();

    return(
        <div>
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
                <Image className={styles.logo} src={img} layout='fill'></Image>
                <ul>
                    <li>Download</li>
                    <li>Nitro</li>
                    <li>Safety</li>
                    <li>Support</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <Button variant="contained" className={styles.buttonLogin} disableElevation>Login</Button>

            </Toolbar>
        </AppBar>
        </div>
        
    )
};