import React from 'react';
import ImageThumbnail from './imageThumbnail';
import HeaderContent from './headerContent';
import './Header.css';

const Header = () => (
	<header>
		<ImageThumbnail />
		<HeaderContent />
	</header>
);

export default Header;