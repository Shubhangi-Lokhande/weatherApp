import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";


const apiURl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING";

const MenuSearch = () => {

    const [allRes, setAllRes]=useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("")
    
    useEffect(()=>{
        getHotels();

    },[]);

    const getHotels = async() => {
        const data = await fetch(apiURl);
        const jsonData = await data.json();
        setAllRes(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilteredData(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    const clickHandler = () => {
        const data = allRes.filter((ele) => ele.data.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(data)
    }


    return (allRes.length == 0) ? <h1>Loading</h1> :  (
        <div className="max-w-[1240px] shadow-xl mx-auto p-3 h-auto bg-gradient-to-b from-cyan-300 via-slate-700 to-blue-400">
            <div className="flex justify-center py-3">
                <h1 className="text-3xl text-black ">Search for your favourite restaurants</h1>
            </div>

           <input type="text" className="border-2 border-blue-200 p-2 rounded-lg w-full my-4" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
           <button className="bg-slate-900 text-white p-3 rounded-lg mx-auto hover:scale-105 duration-200 cursor-pointer" onClick={clickHandler}>Search restaurant</button>
           <div className="flex flex-wrap border-1 mb-11">
            {
                filteredData.map((ele, index) => {
                    return(
                        <MenuCard key={ele.data.id} card={ele.data}/>
                    )  
                })
            }
          </div>
        </div>
    )
}

export default MenuSearch;