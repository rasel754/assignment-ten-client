import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AddCraftCard from "./AddCraftCard";

const MyArtAndCraftList = () => {
    const {user}= useContext(AuthContext) ||{};
    const [item ,setItem]=useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
        })
    },[user])
    return (
        <div>
            <h1>this is my art and craft section</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
                {
                    item.map(list => <AddCraftCard key={list._id} list={list}></AddCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCraftList;