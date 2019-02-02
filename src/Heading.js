import React from 'react';
import './Heading.css';
import 'tachyons';

import Tilt from 'react-tilt'

const Heading = () => {
	return (
		<div className="heading">
<div className="dt dt--fixed w-100">
	<div className="dtc">
		<a className="tc" href="https://facebook.com/Gunner.math" target="_blank">
			<img src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/facebook-512.png" alt="Facebook" height="30" width="30" />
		</a>
	</div>
	
	<div className="dtc">
		<a className="tc" href="https://instagram.com/the360gunner" target="_blank">
		<img src="https://cdn4.iconfinder.com/data/icons/hardware-and-devices/64/Hardware_devices_setting-512.png" alt="Instagram" height="30" width="30" />
		</a>
	</div>

	<div className="dtc">
		<a className="tc" href="https://github.com/360gunner" target="_blank">
		<img src="https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/github2-512.png" alt="Github" height="30" width="30" />
		</a>
	</div>
	
	<div className="dtc">
		<a className="tc" href="https://plus.google.com/u/0/115991514815021893599" target="_blank">
		<img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/google_plus-512.png" alt="Google+" height="30" width="30" />
		</a>
	</div>

</div>
			
			<Tilt className="Tilt" options={{ max : 35 }}>
			<div className="Tilt-inner tc br2 shadow-2">	
			<div className="dt dt--fixed w-100">
			<div className="dtc">	<img className="tc pa10 ma10 dib v-mid" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/115/1641376115_71389139-4a83-41fd-ae87-d5f9f82bb9d9.png?cb=1548951932" />
			</div>
			<div className="dtc">	<img className="pic tc pa10 ma10 dib v-top ba b--orange bw2" src="https://scontent-mrs1-1.cdninstagram.com/vp/2fe3a99ebfda8d76c1aa9d22f7a1af31/5CE0407C/t51.2885-19/s150x150/50243491_345738996268900_3627233210141769728_n.jpg?_nc_ht=scontent-mrs1-1.cdninstagram.com" alt="Avatar" />
			</div>
			<div className="dtc">
			<p className="tc dib v-mid infos">
			
			
			<span style={{ color: '#FF4500' }}>Contact me:</span>
			<br/>
			<span>P:</span> <span>+213-664800158</span> &nbsp;
			<a href="tel:+213664800158"><img src="https://cdn1.iconfinder.com/data/icons/gradient-android-apps/64/1-16-512.png" alt="calll Me" height="15" width="15" /></a>
			<br/>
			<span>E:</span> hkentache<span>@gmail.com</span> &nbsp;
			<a className="mail" href="mailto:hkentache@gmail.com"><img src="https://cdn3.iconfinder.com/data/icons/contact-us-set-3/256/66-512.png" alt="email Me" height="15" width="15" /></a>
			</p>
			</div>
			</div>
			</div>
			</Tilt>
			</div>

			);

}

export default Heading;
