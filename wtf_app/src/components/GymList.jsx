import React,{useState} from 'react';
import styles from './GymList.module.css'

const GymList = ({ gym }) => {
    // const [rating, setRating] = useState(gym_rating);
   
    console.log(gym,"gym");
    return (
			<div className={styles.Div}>
				<div className={styles.firstBox}></div>
				<div className={styles.secondBox}>
					<h3>{gym.gym_name}</h3>
					<p>{gym.rating}</p>
					<p>
						{gym.address1} {gym.address2}
					</p>
					<p>{`${gym.duration_text} away | ${gym.distance} km`}</p>
					<button className={styles.bookButton}>
						<h3>Book Now</h3>
					</button>
				</div>
			</div>
		);
}

export default GymList