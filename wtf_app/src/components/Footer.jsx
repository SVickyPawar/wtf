import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
		<div className={styles.footer}>
			<div className={styles.firstBox}>
				<img
					src="https://play-lh.googleusercontent.com/c71_mHD_9eJm0u898BfRfWsUiEzKg7p0qnLlOmgpeWAptEiwjYMhgl6zZWzhpSE_rmI=w240-h480-rw"
					alt=""
					width="200px"
					height="150px"
				/>
				<div className={styles.mediaIcons}>
					<img
						src="https://cdn-icons-png.flaticon.com/512/4494/4494488.png"
						alt=""
						width="40px"
						height="40px"
					/>
					<img
						src="https://cdn-icons-png.flaticon.com/512/1312/1312139.png"
						alt=""
						width="40px"
						height="40px"
					/>
				<img
					src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
					alt=""
					width="40px"
					height="40px"
				/>
				</div>
			</div>
			<div className={styles.quickLinks}>
				<h3>Quick Links</h3>
				<p>About</p>
				<p>FAQs</p>
				<p>Privacy Policy</p>
				<p>WTF in News</p>
				<p>Terms & Conditions</p>
				<p>Refund & Cansellation</p>
			</div>
			<div className={styles.explore}>
				<h3>Explore</h3>
				<p>Arenas</p>
				<p>Studios</p>
				<p>Nutrition</p>
			</div>
			<div>
              <h3>Contact</h3>
              <p>Ro : S 1502, Amprapali Silicon city,<br/> sector 76 ,Noida, Utter Pradesh, India</p>
			</div>
		</div>
	);
}

export default Footer