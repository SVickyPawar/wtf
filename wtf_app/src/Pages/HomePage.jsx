import React,{useState,useEffect} from 'react'
import GymList from '../components/GymList'
import SideBar from "./SideBar"

const HomePage = () => {

    const [list, setList] = useState([]);

    const url ="https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231";
    useEffect(() => {
        fetch(url).then((res) => res.json()).then(data => console.log(data.data));
    },[])
  return (
      <div style={{display:"flex"}}>
          <SideBar />
          <GymList/>
    </div>
  )
}

export default HomePage