import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const AllArtAndCraftItemsCard = ({item,}) => {
    const {
        _id,
        itemName,
        subcategoryName,
        shortDescription,
        price,
        rating,
        customization,
        stockStatus,
        photo,
        
      } = item;

    return (
        <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
            className="h-64 w-80"
              src={photo}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{itemName}</h2>
            <p className="font-medium">Subcategory Name : {subcategoryName}</p>
            <p className="text-slate-400	"><span className="text-slate-700	">Short Description:</span> {shortDescription}</p>
            <div className="divider divider-accent">More Info</div>
  
              <div className="flex justify-between">
                  <p className="font-bold">Price:-{price}</p>
                  <p className="flex justify-center items-center font-bold">Rating:- {rating} <span><IoIosStar></IoIosStar></span></p>
              </div>
              <div className="flex  justify-between">
                  <p className="font-medium"><span className="font-semibold text-blue-400	">Customization:-</span>{customization} </p>
                  <p className="font-medium"><span  className="font-semibold text-blue-400	">Stock Status:-</span>{stockStatus} </p>
              </div>
  
              <div className="card-actions justify-end">
              <Link to={`/viewDetails/${_id}`}><button className="btn btn-primary btn-info">View Details</button></Link>
              </div>
              
          </div>
        </div>
      </div>
    );
};

export default AllArtAndCraftItemsCard;