import React from 'react';
import { Icons } from 'components/cells';


function PageNav () {
	return (
		<div className="PageNav flex">
			<div className="user-profile flex aic">
				<span className="hamburger" aria-label="icon">
					<Icons.menu />
				</span>
				<img src="assets/images/profile.jpg" alt="user profile" className="profile-image"/>
				<p className="profile-name">John Snow</p>
			</div>
		</div>
	)
};

export default PageNav;
