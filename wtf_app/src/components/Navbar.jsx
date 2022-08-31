import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img
					src="https://play-lh.googleusercontent.com/c71_mHD_9eJm0u898BfRfWsUiEzKg7p0qnLlOmgpeWAptEiwjYMhgl6zZWzhpSE_rmI=w240-h480-rw"
					alt="" width="100px" height="50px" 
				/>
			</div>
			<div className={styles.sections}>
				<p>Fitness</p>
				<p>Nutrition</p>
				<p>Gyms</p>
				<p>Become WTF Partner</p>
                <p>About US</p>
                <button>Login</button>
			</div>
		</div>
	);
}

export default Navbar