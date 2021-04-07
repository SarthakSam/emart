import styles from './Sidenav.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';

// import { NavLink } from 'react-router-dom';

// import { useStore } from '../contexts/store-context';
// import { staticRoutes } from '../static-data';
// import { ChangeRoute, InitializePlaylists } from '../actions';
// import { FaHome, FaFileVideo, FaCloudUploadAlt, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import { MdHistory, MdPlaylistPlay } from 'react-icons/md'
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useLoader } from '../contexts/loader-context';
// import { useNotifications } from '../contexts/notifications-context';

export function Sidenav() {

    return (
        <aside className = { styles.sidenav }>
            <input type="checkbox" id="sidenav__toggle" className={  styles.sidenav__toggle} defaultChecked/>
            <label htmlFor="sidenav__toggle" className={ styles.sidenav__expand }>
                <MdKeyboardArrowRight className = { styles.sidenav__expandIcon } />
            </label>
        </aside>
    )
}