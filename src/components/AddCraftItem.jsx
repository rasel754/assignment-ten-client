import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const AddCraftItem = () => {
  // State to store the selected value
  const [selectedOption, setSelectedOption] = useState("");
  const [customization , setCustomization] = useState("");
  const [stock , setStock] = useState("");
  const {user}= useContext(AuthContext) ||{};

  // Function to handle change in selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCustomization = (event) => {
    setCustomization(event.target.value);
  };
  const handleStock = (event) => {
    setStock(event.target.value);
  };

  const handleAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const processTime = form.processTime.value;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photo.value;
    const ownerEmail = user.email;

    const Info = {itemName,subcategoryName,shortDescription,price,processTime,name,email,rating,customization, stockStatus, photo,ownerEmail};
    console.log(Info);

    fetch("http://localhost:5000/addCraft",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(Info)
    })
     .then(res => res.json())
     .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Yaaa...",
                text: "user added successfully",
               
              });
              form.reset();
        }
      })





  };
  return (
    <div className="">
      <h2 className="text-3xl font-extrabold text-center rounded-t-3xl bg-[#B3D9FF] py-8 md:w-4/5 mx-auto shadow-2xl">
        Add a Coffee
      </h2>
      <form
        onSubmit={handleAddCraft}
        className="bg-[#F2F9FC] p-6 md:p-12 lg:p-24 md:w-4/5 mx-auto shadow-2xl"
      >
        {/* form name and quantity row */}
        <div className="md:flex mb-1 md:mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="itemName"
                placeholder="Enter Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategoryName"
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shortDescription"
                placeholder="give short description
                  "
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processTime"
                placeholder="give process time"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form name and quantity row */}
        <div className="md:flex mb-4 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="enter your email address"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ">
            {/* Dropdown select element */}
            <label className="label">
              <span className="label-text">Give rating out of 5</span>
            </label>
            <select
              name="rating"
              className="w-full p-4 border rounded-xl"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {/* Default placeholder option */}
              <option value="">give rating</option>
              {/* Other options */}
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
            </select>
          </div>
        </div>

        {/* comment  */}

        <div className="md:flex mb-4 gap-6 ">
          <div className="form-control md:w-1/2 ">
            {/* Dropdown select element */}
            <label className="label">
              <span className="label-text">Customization ?</span>
            </label>
            <select
              name="customization"
              className="w-full p-4 border rounded-xl"
              value={customization}
              onChange={handleCustomization}
            >
              {/* Default placeholder option */}
              <option value="">Select an option</option>
              {/* Other options */}
              <option value="YES">Yes</option>
              <option value="NO">NO</option>
            </select>
          </div>

          <div className="form-control md:w-1/2">
            {/* Dropdown select element */}
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <select
              name="stockStatus"
              className="w-full p-4 border rounded-xl"
              value={stock}
              onChange={handleStock}
            >
              {/* Default placeholder option */}
              <option value="">Select an option</option>
              {/* Other options */}
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
        </div>

        {/* form Photo url row */}
        <div className="mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="photo"
                placeholder=" use image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Craft Item" className="btn btn-block btn-secondary text-black font-extrabold text-2xl" />
      </form>
    </div>
  );
};

export default AddCraftItem;
