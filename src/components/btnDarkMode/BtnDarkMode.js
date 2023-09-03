import { useEffect } from 'react';
import {useLocalStorage} from "./../../utils/useLocalStorage"
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

const BtnDarkMode = () => {
    
	return (
		<button>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	);
};

export default BtnDarkMode;
