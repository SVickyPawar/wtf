import React,{useState,useEffect} from 'react'
import GymList from '../components/GymList'
import SideBar from "./SideBar"

const HomePage = () => {

    const [list, setList] = useState([]);

    console.log(list)

    const url ="https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231";
    useEffect(() => {
        fetch(url).then((res) => res.json()).then(data => setList(data.data))
    },[])
  return (
		<div style={{ display: "flex" }}>
			<SideBar />
			<div>
				{list.map((el) => (
					<div key={el.id}>
						<GymList gym={el} />
					</div>
				))}
			</div>
		</div>
	);
}

export default HomePage