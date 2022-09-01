import React,{useState} from 'react'
import styles from './SideBar.module.css'

const GymPage = ({handleSelect} ) => {
	const [city, setCity] = useState("");
	// console.log(handleSelect)
	const handleChange = (e) => {
		setCity(e.target.value)
		
		
	}
	handleSelect(city);
	//console.log(city)

	
	
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
				<select onChange={handleChange} className={styles.selectCity} name="" id="cities">
					<option value="">Select City</option>
					<option value="Noida">Noida</option>
					<option value="Delhi">Delhi</option>
					<option value="New Delhi">New Delhi</option>
					<option value="Ghaziabad">Ghaziabad</option>
					<option value="Greater Noida">Greater Noida</option>
				</select>
			</div>
		);
}

export default GymPage