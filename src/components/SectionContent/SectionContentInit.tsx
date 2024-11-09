import React from "react";
import styled from "styled-components";
import profileImage from "../../assets/images/profile.png";
import curriculo from "../../assets/PDFs/curriculo.pdf";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const SectionContentInit = () => {
    const handleCurriculoDownload = () => {
        window.open(curriculo, "_blank");
    };

    const handleLinkedInClick = () => {
        window.location.href = 'https://www.linkedin.com/in/bruno-souza-913984189/';
    };

    const handleGithubClick = () => {
        window.location.href = 'https://github.com/Bruno-Cunha-Souza';
    };

    return (
        <StyledSectionInit className="flex gap-1 center_content" id="init">
            <div className="flex section__pic_profile">
                <img src={profileImage} alt="" />
            </div>
            <div className="section__text">
                <p className="one">Olá, sou</p>
                <h1>Bruno Souza</h1>
                <p className="two">FullStack Developer</p>
                <div className="container__btn">
                    <button className="btn btn-1" onClick={handleCurriculoDownload}>
                        Currículo Download
                    </button>
                    <button className="btn btn-2">Informação de Contato</button>
                </div>
                <div className="container__socials">
                    <button onClick={handleLinkedInClick}><FaLinkedin className="icon"/></button>
                    <button onClick={handleGithubClick}><FaSquareGithub className="icon"/></button>
                </div>
            </div>
        </StyledSectionInit>
    );
};

const StyledSectionInit = styled.section`
	.section__pic_profile {
		height: 400px;
		width: 400px;
		img {
			border-radius: 48px;
		}
	}
	.section__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--text-color);
		font-weight: 500;
		p.two{
			font-size: 1.5rem;
		}
		h1 {
			margin-top: -.25rem;
			font-size: 3rem;
			font-weight: 500;
		}
		.container__btn {
			margin-top: 0.75rem;
			display: flex;
			gap: 1.5rem;
			.btn {
				padding: 0.35rem;
				border-radius: 28px;
				color: var(--text-color);
				width: 10rem;
				transition: all 300ms ease;
			}
			.btn-1 {
				border: 2px solid rgb(0, 0, 0, 0.95);
				&:hover {
				color: white;
				background-color: rgb(0, 0, 0, 0.95);
				}
			}
			.btn-2 {
				color: white;
				background-color: rgb(0, 0, 0, 0.95);
				&:hover {
				background-color: rgb(0, 0, 0, 0.8);
				}
			}
		}
	}
  	.container__socials{
		margin-top: 1rem;
		display: flex;
		gap: 1.5rem;
		.icon{
			font-size: 2.25rem;
			color: var(--text-color);
		}
  	}
  	@media screen and (max-width: 600px) {
		flex-direction: column;
		.section__pic_profile {
			height: 280px;
			width: 260px;		
		}
		.section__text {
			margin-top: 2rem;
			p {
				font-size: 1.40rem;
			}
			p.one {
				font-size: 1.15rem;
			}
			h1 {
				font-size: 2.85rem;
			}
			.container__btn {
			.btn {
				padding: 0.20rem;
				width: 9rem;
				}
			}
		}
		.container__socials{
			margin-top: 1rem;
			display: flex;
			gap: 1.5rem;
			.icon{
				font-size: 2.15rem;
				color: var(--text-color);
			}
		}
  	}
`;

export default React.memo(SectionContentInit);