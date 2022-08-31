import React from 'react'
import styles from './SideBar.module.css'

const GymPage = () => {
    return (
			
				<div className={styles.mainDiv}>
					<h1>Filter</h1>
					<h3>Location</h3>
					<input
						className={styles.locationBox}
						type="text"
						placeholder="Enter Location"
					/>
					<h3>Price</h3>
					<input className={styles.priceBox} type="number" placeholder="Min" />
					<input className={styles.priceBox} type="number" placeholder="Max" />
					<h3>Cities</h3>
					<select className={styles.selectCity} name="" id="cities">
						<option value="">
							Select City
						</option>
					</select>
				</div>
			
		);
}

export default GymPage