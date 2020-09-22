import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => (
	<Container fluid className="footer-container fixed-bottom">
		<h6 align="center" className="mb-0 pb-3">
			<a href="/waterdamage/">Home</a>&nbsp;|&nbsp;
			<a href="/waterdamage/contact">Contact</a>&nbsp;|&nbsp;
			<a href="/waterdamage/privacy-policy">Privacy Policy</a>
		</h6>
		<h6 className="text-center py-3 text-white">
			<img src="https://galacticblue.net/waterdamage/img/logo.png" height="23" alt="Water Damage Restoration of Utah" />&nbsp;&nbsp;
			&copy; {(new Date().getFullYear())} Water Damage Restoration of Utah. All Rights Reserved.
		</h6>
	</Container>
);

export default Footer;
