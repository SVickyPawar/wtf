import React,{useState,useEffect} from 'react'
import GymList from '../components/GymList'
import Navbar from '../components/Navbar';
import SideBar from "./SideBar";
import Footer from '../components/Footer';

const HomePage = () => {

	const [list, setList] = useState([]);
	const [city,setCity]=useState("")

	console.log(city);

	const handleSelect = (a) => {
		setCity(a);
	};
	

    const url ="https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231";
	useEffect(() => {
		if (city == "Noida") {
			fetch("https://devapi.wtfup.me/gym/places?city=noida").then(res=>res.json()).then(data=>setList(data.data));
		} else {
			 fetch(url)
					.then((res) => res.json())
					.then((data) => setList(data.data));
		}
       
    },[city])
    return (
        <>
            <Navbar/>
				<div style={{ display: "flex" }}>
					<SideBar handleSelect={handleSelect} />
					<div>
						{list.map((el) => (
							<div key={el.user_id}>
								<GymList gym={el} />
							</div>
						))}
					</div>
			</div>
			<Footer/>
			</>
		);
}

export default HomePage