import { useState, useEffect } from 'react'
import Project from '../components/project/Project'
import {projects} from "./../helpers/projectsList"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
const Projects = () => {
	
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000)
	},[])

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
				<SkeletonTheme baseColor="#202020" highlightColor="#444">
					{projects.map((project, index) => {
						return (
							isLoading ? <Skeleton width='370px' height='150px' style={{maxWidth:'370px', borderRadius:'10px'}}/> :
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
					</SkeletonTheme>
				</ul>
			</div>
		</main>
	);
};

export default Projects;
