import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AddCraftCard from "./AddCraftCard";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext) || {};
  const [item, setItem] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(`https://assignment-ten-server-liart.vercel.app/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  return (
    <div>
      <h1 className="bg-[#1C384E] text-white py-10 text-center font-extrabold text-3xl">
        {" "}
        My Art And Craft
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
        {item.map((list) => (
          <AddCraftCard
            item={item}
            setItem={setItem}
            key={list._id}
            list={list}
          ></AddCraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
