import { FaStar } from "react-icons/fa";

const CraftItemsSectionCard = ({ item }) => {
  const {
    itemName,
    subcategoryName,
    shortDescription,
    price,
    processTime,
    name,
    email,
    rating,
    customization,
    stockStatus,
    photo,
    UserEmail,
  } = item;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mx-8 ">
        <figure  className="w-1/3 ">
          <img
         
            src={photo}
            alt="Movie"
          />
        </figure>
        
        <div className="card-body ">
          <h2 className="card-title text-2xl font-extrabold">Name: {itemName}</h2>
          <p className="text-[#131318B3]">{shortDescription}</p>
          <div className="flex justify-between">
            <p className="text-[#FF5400] text-xl font-bold">Price : {price}</p>
            <p className="flex justify-center items-center text-[#FF5400] text-xl font-bold">Rating : {rating}<FaStar></FaStar></p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary ">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItemsSectionCard;
