import React from "react";
import styled from "styled-components";
import { FaPython, FaGolang, FaGithub } from "react-icons/fa6";


const SectionProjects = () => {
	const handleGolang = () => {
		window.open('https://github.com/Bruno-Cunha-Souza/small_golang_projects', '_blank');
	};
	
	const handlePython = () => {
		window.open('https://github.com/Bruno-Cunha-Souza/small_python_projects', '_blank');
	};
	const handleGit = () => {
		window.open('https://github.com/Bruno-Cunha-Souza', '_blank');
	};
	return (
	<StyledSectionProjects className="center_content flex flex-col " id="projects">
		<p className="one">Alguns dos meus</p>
		<h1 className="title__section">Projetos</h1>
		<div className="project__section flex justify-center gap-5 flex-wrap">
			<button className="project__container" onClick={handlePython}>
				<div className="img__container">
					<FaPython className="icon"/>
				</div>
				<h3>Small Projects - Python</h3>
			</button>
			<button className="project__container" onClick={handleGolang}>
				<div className="img__container">
					<FaGolang className="icon"/>
				</div>
				<h3>Small Projects - Golang</h3>
			</button>
		</div>
		<button className="git__section flex justify-evenly items-center" onClick={handleGit}>
			<FaGithub className="git-icon"/> GitHub
		</button>
	</StyledSectionProjects>
  );
}

const StyledSectionProjects = styled.section`
	.icon{
		font-size: 3rem;
		color: white;
	}
	.project__section{
		width: 80%;
	}
	.project__container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 35%;
		max-width: 500px;
        padding: 1.25rem 2.5rem;
        box-sizing: border-box;
        border-radius: 28px;
        border: 2px solid var(--text);
		.img__container{
			padding: 4rem 7rem;
			border-radius:30px;
			background-color: var(--span);
			margin-bottom: 1.25rem;
		}
		h3{
			font-size: 1.65rem;
			font-weight: 600;
		}
	}
	.git__section{
		margin-top: 1.85rem;
        width: 160px;
        padding: .75rem 0;
        border-radius: 8px;
		border: 2px solid rgb(0, 0, 0, 0.95);
		transition: all 300ms ease;
		font-weight: 500;
		&:hover {
		color: white;
		background-color: rgb(0, 0, 0, 0.95);
		}
		.git-icon{
			font-size: 1.5rem;
		}
	}
	@media screen and (max-width: 600px) {
		margin-top: 5rem;
		.project__section{
			flex-direction: column;
			align-items: center;
		}
		.project__container{
			width: 99%;
		}
	}
`;

export default React.memo(SectionProjects);