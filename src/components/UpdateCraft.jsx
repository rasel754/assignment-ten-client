import { useLoaderData } from "react-router-dom";

const UpdateCraft = () => {
    const data = useLoaderData()
    // const {
    //     _id,
    //     itemName,
    //     subcategoryName,
    //     shortDescription,
    //     price,
    //     rating,
    //     customization,
    //     stockStatus,
    //     photo,
        
    //   } = data;
    return (
        <div>
            <h1>updateCraft is here{data.itemName}</h1>
        </div>
    );
};

export default UpdateCraft;