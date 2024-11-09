import React from "react";
import styled from "styled-components";
import { FaAward } from "react-icons/fa6";

const SectionAbout = () => {
	return (
		<StyledSectionAbout className="center_content flex flex-col" id="about">
				<p className="one">Conheça mais</p>
				<h1 className="title__section">Sobre mim</h1>
				<div className="exp__section flex justify-center items-center gap-14">
					<div className="exp__container flex flex-col justify-center items-center">
						<FaAward className="icon" />
						<h1 className="exp__h1">Experiência</h1>
						<p>3+ ano <br/> FullStack Development</p>
					</div>
					<div className="exp__container flex flex-col justify-center items-center">
						<FaAward className="icon" />
						<h1 className="exp__h1">Experiência</h1>
						<p>1+ ano <br/> Desenvolvimento de Sistema de Monitoramento e Alarme Municipal</p>
					</div>
				</div>
				<div className="text__section flex justify-center">
					<p className="text">
						Sou um Desenvolvedor FullStack com experiência sólida em desenvolvimento de aplicações web e consultoria.
						<br/><br/>
						Atuando desde 2020 como desenvolvedor autônomo, possuindo diversas competências em variadas tecnologias e
						linguagens como Python, GoLang, SQL/NoSQL, JavaScript, HTML & CSS, além de experiência tanto em front-end
						quanto em back-end. Tenho também
						conhecimentos em Governança de TI, o que me permite alinhar as soluções tecnológicas às necessidades
						estratégicas das organizações.
						<br/><br/>
						De agosto de 2023 a novembro de 2024, participei do desenvolvimento de uma aplicação
						de monitoramento e alarme para segurança pública municipal, utilizando principalmente Python, Golang e Django.
					</p>
				</div>
		</StyledSectionAbout>
  );
}

const StyledSectionAbout = styled.section`
	.icon{
		font-size: 2rem;
		color: var(--text);
	}
	.exp__h1{
		font-size: 1.25rem;
		font-weight: 600;
	}
	.exp__container{
		width: 600px;
		padding: 1rem 0;
		border-radius: 28px;
		border: 2px solid var(--text);
	}
	.text__section{
		margin-top: 2rem;
		p.text{
			color: var(--text);
			text-align: start;
			width: 75%;
		}
	}
	@media screen and (max-width: 600px) {
	margin-bottom: 5rem;
	.exp__section{
		flex-direction: column;
		gap: 1rem;
	}
	.exp__container{
		width: 340px;
		padding: 1rem 0;
		border-radius: 28px;
		border: 2px solid var(--text);
	}
}
`;

export default React.memo(SectionAbout);