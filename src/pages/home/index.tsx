
import React from "react";
import Header from "../../layouts/header";
import Main from "../../layouts/main";
import Footer from "../../layouts/footer";
import ToogleTheme from "../../components/ToogleTheme";
import { ThemeProvider } from "../../context/Theme/ThemeContext";
import Navbar from "../../components/Navbar";
import SectionContentInit from "../../components/SectionContent/SectionContentInit";
import SectionAbout from "../../components/SectionContent/SectionAbout";
import SectionKnow from "../../components/SectionContent/SectionKnow";
import SectionContact from "../../components/SectionContent/SectionContact";

const Home = () => {
	return (
		<ThemeProvider>
			<Header><Navbar /></Header> 
			<Main>
				<SectionContentInit />
				<SectionAbout />
				<SectionKnow />
				<SectionContact />
			</Main>
			<Footer><ToogleTheme/></Footer>
		</ThemeProvider>
  );
}

export default React.memo(Home);