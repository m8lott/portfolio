import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnGhPages = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline" style={{cursor:'pointer'}}>
			<img src={gitHubIcon} alt="" />
			GitHub Pages
		</a>
	);
};

export default BtnGhPages;