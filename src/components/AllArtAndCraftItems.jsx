import { useLoaderData } from "react-router-dom";
import AllArtAndCraftItemsCard from "./AllArtAndCraftItemsCard";

const AllArtAndCraftItems = () => {
    const data = useLoaderData();
    return (
        <div>
                <h1> All Art And Craft Items </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-8">
                {
                    data.map(item => <AllArtAndCraftItemsCard key={item._id} item={item}></AllArtAndCraftItemsCard>)
                }
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;