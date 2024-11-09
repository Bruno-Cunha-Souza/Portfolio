import React, { useState } from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";

const SectionContact = () => {
    const [isEmailHovered, setIsEmailHovered] = useState(false);

	const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/bruno-souza-913984189/', '_blank');
    };

	const handleEmailClick = () => {
        window.location.href = 'mailto:brunosouza.cup@gmail.com';
    };

    return (
        <StyledSectionContact className="center_content flex flex-col" id="contact">
            <h1 className="title__section">Contate-me</h1>
            <div className="contact__section flex">
                <button
                    className="btn" onClick={handleEmailClick}
                    onMouseEnter={() => setIsEmailHovered(true)}
                    onMouseLeave={() => setIsEmailHovered(false)}
                >
                    {isEmailHovered ? <HiOutlineMailOpen className="icon" /> : <HiOutlineMail className="icon" />}
                    Email
                </button>
                <button className="btn" onClick={handleLinkedInClick}>
                    <FaLinkedin className="icon" />
                    Linkedin
                </button>
            </div>
        </StyledSectionContact>
    );
}

const StyledSectionContact = styled.section`
    .icon {
        font-size: 2rem;
    }
    .contact__section {
        width: 50%;
        max-width: 700px;
        justify-content: space-around;
        padding: 1rem;
        box-sizing: border-box;
        .btn {
            padding: 1rem 2.75rem;
			gap: .75rem;
			width: 240px;
            border-radius: 28px;
            font-size: 1.5rem;
            font-weight: 500;
            display: flex;
            align-items: center;
			justify-content: center;
			border: 2px solid rgb(0, 0, 0, 0.95);
				&:hover {
				color: white;
				background-color: rgb(0, 0, 0, 0.95);
			}
        }
    }
    @media screen and (max-width: 600px) {
        .contact__section {
            width: 98%;
            max-width: 700px;
            gap: 1.5rem;
            justify-content: center;
            flex-direction: column;
            .btn{
                align-self: center;
            }
        }
    }
`;

export default React.memo(SectionContact);