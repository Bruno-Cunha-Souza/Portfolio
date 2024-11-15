
import React, { ReactNode } from "react";

interface FooterProps {
	children: ReactNode;
  }

const Footer : React.FC<FooterProps> = ({ children }) => {
	return (
	<footer>{children}</footer>
  );
}

export default React.memo(Footer);
