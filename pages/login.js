import styles from '../styles/Login.module.css';
import Button from '@mui/material/Button';
import qrcode from '../public/qrcode.png';
import Image from 'next/image';

export const LoginPage = () => {
    return (
        <div className='page-container'>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h3>Welcome back!</h3>
                            <p>We&apos;re so excited to see you again!</p>
                        </div>
                        {/* <div className={styles.title}>
                            <h2></h2>
                        </div> */}
                        <div className={styles.cardBody}>
                            <h5>EMAIL OR PHONE NUMBER</h5>
                            <input className={styles.inputField} name="email" type="text" aria-label="Email or Phone Number" maxLength="999" autoComplete='off'></input>
                            <h5>PASSWORD</h5>
                            <input className={styles.inputField} name="password" type="password" aria-label="Password" minLength="8" autoComplete='off'></input>
                            <a href="#">Forgot your password?</a>
                            <div className={styles.registerContainer}>
                            <Button variant="contained" className={styles.loginButton}>Login</Button>
                            <span className={styles.acc}>Need an account? </span> <a href="#" className={styles.register}>Register</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.verticalSeparator}></div>
                    <div className={styles.qrgroup}>
                        <div className={styles.measurementFill}>
                            <div className={styles.qrcode}>
                                <Image src={qrcode}></Image>
                            </div>
                            <h3>Log in with QR Code</h3>
                            <p>Scan this with the <strong>Discord mobile app</strong>  to log in instantly.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;
