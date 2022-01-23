import { ToolbarComp } from "../components/toolbar";
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';
import banner from '../public/banner.svg';
import bannerLeft from '../public/left-banner.svg';
import img from '../public/diamond-pink.svg';
import voice from '../public/voice.svg';
import fandom from '../public/fandom.svg';
import journey from '../public/journey.svg';
import backdrop from '../public/backdrop.svg';

export const HomePage = () => {
    return (
        <div className='page-container'>
            <ToolbarComp />
            <div className={styles.banner}>
                <h1 className={styles.heading}>IMAGINE A PLACE...</h1>
                <div className={styles.contentDiv}>
                    <p className={styles.content}>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                </div>
                <div className={styles.btnGrp}>
                    <Button variant="contained" startIcon={<DownloadIcon />} className={styles.btnDownload} disableElevation>Download for Mac</Button>
                    <Button variant="contained" className={styles.btnBrowser} disableElevation>Open Discord in your browser</Button>
                </div>
                {/* <Image src={backdrop} alt="banner"></Image> */}

                <div className={styles.bannerLeftContainer}>

                    <Image src={bannerLeft} alt="banner" width={650} height={360} className={styles.bannerLeftImg}></Image>
                </div>
                <div className={styles.bannerContainer}>

                    <Image src={banner} alt="banner" width={650} height={360} className={styles.bannerImg}></Image>
                </div>

            </div>
            <div className={styles.grid}>
                <Image src={img} alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos." width={678} height={440} ></Image>
                <div className={styles.description}>
                    <h1 className={styles.descriptionTitle}> Create an invite-only place where you belong</h1>
                    <p className={styles.descBody}>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </div>
            </div>
            <div className={styles.grid1}>
                <div className={styles.description1}>
                    <h1 className={styles.descriptionTitle}> Where hanging out is easy</h1>
                    <p className={styles.descBody}>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                </div>
                <Image src={voice} alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos." width={678} height={440} ></Image>

            </div>
            <div className={styles.grid}>
                <Image src={fandom} alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos." width={678} height={440} ></Image>
                <div className={styles.description}>
                    <h1 className={styles.descriptionTitle}> From few to a fandom</h1>
                    <p className={styles.descBody}>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </div>
            </div>
            <div className={styles.grid2}>
                <div className={styles.description2}>
                    <h1 className={styles.descriptionTitle2}> RELIABLE TECH FOR STAYING CLOSE</h1>
                    <p className={styles.descBody}>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                </div>
                <Image src={journey} alt="Stylized image of a Discord server with multiple channels for studying, games, cooking, and pet photos." width={1180} height={715} ></Image> 

            </div>
        </div>
    );
};
export default HomePage;
