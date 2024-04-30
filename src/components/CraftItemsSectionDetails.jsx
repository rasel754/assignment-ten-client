import { IoIosStar } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const CraftItemsSectionDetails = () => {
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
      <div>
        <div className="card  bg-base-100 shadow-xl w-3/5 mx-auto">
          <figure>
            <img className="h-64 w-96" src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold">Name : {itemName}</h2>
            <p className="text-xl font-semibold">Subcategory :{subcategoryName}</p>
            <p>{shortDescription}</p>
            <div className="divider divider-accent">More Info</div>

            <div className="flex justify-between">
              <p className="font-bold">Price:-{price}</p>
              <p className="flex justify-center items-center font-bold">
                Rating:- {rating}{" "}
                <span>
                  <IoIosStar></IoIosStar>
                </span>
              </p>
            </div>
            <div className="flex  justify-between">
              <p className="font-medium">
                <span className="font-semibold text-blue-400	">
                  Customization:-
                </span>
                {customization}{" "}
              </p>
              <p className="font-medium">
                <span className="font-semibold text-blue-400	">
                  Stock Status:-
                </span>
                {stockStatus}{" "}
                
              </p>
             
            </div>
            <div className="divider divider-secondary">Crafter Information</div>
              <div className="flex justify-between items-center">
              <h3>Crafter Name: {name}</h3>
              <h3>Crafter Email: {UserEmail}</h3>
              </div>
              <p>Processing Time: {processTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItemsSectionDetails;
