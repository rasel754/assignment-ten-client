import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyArtAndCraftList = () => {
    const {user}= useContext(AuthContext) ||{};

    useEffect(() =>{
        fetch(`http://localhost:5000/myArtAndCraft/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
            <h1>this is my art and craft section</h1>
        </div>
    );
};

export default MyArtAndCraftList;