import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCraftCard = ({ list,item,setItem }) => {
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
    
  } = list;

  const handleDelete =_id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://assignment-ten-server-liart.vercel.app/myArtAndCraft/${_id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount>0) {
            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
          })
          const remaining = item.filter(p => p._id !== _id)
          setItem(remaining)
          }
        });
      }
    });
  };
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
          <p>{shortDescription}</p>
          <div className="divider divider-accent">More Info</div>

            <div className="flex justify-between">
                <p className="font-bold">Price:-{price}</p>
                <p className="flex justify-center items-center font-bold">Rating:- {rating} <span><IoIosStar></IoIosStar></span></p>
            </div>
            <div className="flex  justify-between">
                <p className="font-medium"><span className="font-semibold text-blue-400	">Customization:-</span>{customization} </p>
                <p className="font-medium"><span  className="font-semibold text-blue-400	">Stock Status:-</span>{stockStatus} </p>
            </div>

            <div className="card-actions justify-between">
              <Link to={`/updateCraft/${_id}`}>
              <button className="btn btn-primary">Update</button>
              </Link>
            <button
            onClick={()=>handleDelete(_id)}
             className="btn btn-primary btn-warning">Delete</button>

            </div>
            
        </div>
      </div>
    </div>
  );
};

export default AddCraftCard;
