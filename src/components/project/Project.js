import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, index }) => {

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if(isLoading) {
			setIsLoading(false)
		}
	},[isLoading])

	return (
		<NavLink to={`/project/${index}`}>
		<SkeletonTheme baseColor="#202020" highlightColor="#444">
		{isLoading ? <Skeleton width='370px' height='150px' style={{maxWidth:'370px', borderRadius:'10px'}}/> :
			<li className="project">
				<img src={img} alt={title} className="project__img" onLoad={() => setIsLoading(false)}/>
				<h3 className="project__title">{title}</h3>
			</li>}
			</SkeletonTheme>
		</NavLink>
	);
};

export default Project;
