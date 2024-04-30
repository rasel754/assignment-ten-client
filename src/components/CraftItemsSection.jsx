
import { useLoaderData } from "react-router-dom";
import CraftItemsSectionCard from "./CraftItemsSectionCard";

const CraftItemsSection = () => {
    const craftItem = useLoaderData()
  
    return (
        <div>
            <h1 className="bg-[#1C384E] text-white py-10 text-center font-extrabold text-3xl">Craft Items Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {
                    craftItem.map(item => <CraftItemsSectionCard key={item._id} item={item}></CraftItemsSectionCard>)
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;