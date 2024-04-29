import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const ViewDetails = () => {
  const data = useLoaderData();
  const {
    itemName,
    subcategoryName,
    shortDescription,
    price,
    processTime,
    name,
    rating,
    customization,
    stockStatus,
    photo,
    UserEmail,
  } = data;
  return (
    <div>
          <h1 className="text-center font-extrabold text-4xl pt-6"> Details OF: {itemName}</h1>
        <div className="m-10 bg-[#F1F3F4] shadow-2xl rounded-badge  ">
      <div className="card lg:card-side  shadow-xl ">
        <figure className=" w-3/5">
          <img
          className="m-10 rounded-3xl ml-5 p-4"
            src={photo} 
            alt="Album"
          />
        </figure>
        <div className="card space-y-4 p-4">
        <div className="divider divider-primary text-xl font-medium">basic information</div>
          <h2 className=" text-center font-bold text-3xl ">Name:- {itemName}</h2>
          <p className="text-center text-xl font-medium">Subcategory:- {subcategoryName}</p>
          <p className="text-[#706F6F]"><span><span className="text-xl font-medium">Description :</span></span>{shortDescription}</p>
          <div className="flex justify-between">
            <h3 className="text-[#FF5400] text-xl font-bold">Price: {price}</h3>
            <h3 className="text-xl font-bold text-teal-300	"><span className="text-[#af822f]">Stock Status: </span>{stockStatus}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-blue-700">Is it Customized : {customization}</h3>
            <h3 className="text-xl font-bold text-blue-700">Process Time: {processTime}</h3>       
          </div>
          <h1 className="flex justify-center items-center text-pink-700	 font-extrabold text-3xl">Rating:- {rating}<FaStar></FaStar></h1>
          <div className="divider divider-info text-xl font-medium">Added Info</div>
          <h1 className="text-xl font-medium text-rose-800	">Name: {name}</h1>
          <h3 className="text-xl font-medium text-rose-800	">Email : {UserEmail}</h3>
          <p></p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ViewDetails;
