import React from "react";
import styled from "styled-components";
import { FaPython, FaGolang, FaHtml5, FaCss3, FaReact, FaVuejs, FaGithub, FaClipboardCheck, FaFigma, FaCloud, FaAws } from "react-icons/fa6";
import { BsFiletypeSql } from "react-icons/bs";
import { RiJavascriptFill } from "react-icons/ri";
import { SiDjango, SiPowerbi, SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";


const SectionKnow = () => {
	const handleCertificate = () => {
        window.location.href = 'https://www.linkedin.com/in/bruno-souza-913984189/details/certifications/';
    };
	return (
		<StyledSectionKnow className="center_content flex flex-col " id="know">
			<p className="one">Veja meus</p>
			<h1 className="title__section">Conhecimentos</h1>
			<div className="know__section flex justify-center gap-5 flex-wrap">
				<div className="know__container">
					<h3>Linguagens</h3>
					<div className="list">
						<p><FaPython className="icon"/>Python</p>
						<p><FaGolang className="icon"/> Golang</p>
						<p><RiJavascriptFill className="icon"/>JavaScript</p>
						<p><BiLogoTypescript className="icon"/>TypeScript</p>
						<p><BsFiletypeSql className="icon"/>SQL</p>
						<p><FaHtml5 className="icon"/>HTML5</p>
						<p><FaCss3 className="icon"/>CSS</p>
					</div>
				</div>
				<div className="know__container">
					<h3>Frameworks & Ferramentas</h3>
					<div className="list">
						<p><FaReact className="icon"/>React</p>
						<p><SiDjango className="icon"/>Django</p>
						<p><FaVuejs className="icon"/>Vue.js</p>
						<p><FaGithub className="icon"/>GitHub</p>
						<p><SiPowerbi className="icon"/>PowerBI</p>
						<p><FaFigma className="icon"/>Figma</p>
						<p><FaCloud className="icon"/>Cloud</p>
						<p><FaAws className="icon"/>AWS</p>
						<p><SiMongodb className="icon"/>MongoDB</p>
					</div>
				</div>
				<div className="know__container">
					<h3>Competências</h3>
					<div className="list">
						<p><FaClipboardCheck className="icon"/>Gestão de Projetos</p>
						<p><FaClipboardCheck className="icon"/>Padrões de Comunicação</p>
						<p><FaClipboardCheck className="icon"/>Arquitetura de Softwares</p>
						<p><FaClipboardCheck className="icon"/>Diagramação</p>
						<p><FaClipboardCheck className="icon"/>Governancia de TI</p>
						<p><FaClipboardCheck className="icon"/>Gestão de Dados</p>
						<p><FaClipboardCheck className="icon"/>Arquitetura de Computadores</p>
					</div>
				</div>
			</div>
			<button onClick={handleCertificate} className="certificate__section flex justify-evenly items-center">
					<TbCertificate /> Certificados
			</button>
		</StyledSectionKnow>
	);
}

const StyledSectionKnow = styled.section`
	.icon{
		font-size: 1.25rem;
		color: var(--text);
	}
	 .know__section {
		width: 80%;
    }
    .know__container {
		display: flex;
		flex-direction: column;
		text-align: center;
        width: 50%;
		max-width: 600px;
        padding: 1rem 1.75rem;
        box-sizing: border-box;
        border-radius: 28px;
        border: 2px solid var(--text);
        h3 {
            font-size: 1.65rem;
            font-weight: 600;
			margin-bottom: 1rem;
            color: var(--span);
        }
		.list{
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: .75rem 1.5rem;
			p{	
				display: flex;
				align-items: center;
				gap: .25rem;
				font-weight: 500;
				font-size: 1.15rem;
				color: var(--text);
			}
		}
    }
	.certificate__section{
		margin-top: 2rem;
        width: 200px;
        padding: 1rem 0;
        border-radius: 8px;
		border: 2px solid rgb(0, 0, 0, 0.95);
		transition: all 300ms ease;
		&:hover {
		color: white;
		background-color: rgb(0, 0, 0, 0.95);
		}
	}
	@media screen and (max-width: 600px) {
		.know__container {
			width: 99%;
			max-width: 600px;
			padding: 1rem 1.75rem;
			box-sizing: border-box;
			border-radius: 28px;
			border: 2px solid var(--text);
        }
	}
`;

export default React.memo(SectionKnow);