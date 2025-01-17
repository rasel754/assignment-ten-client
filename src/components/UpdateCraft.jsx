import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customization1, setCustomization] = useState("");
  const [stock, setStock] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCustomization = (event) => {
    setCustomization(event.target.value);
  };
  const handleStock = (event) => {
    setStock(event.target.value);
  };

  const data = useLoaderData();
  const {
    _id,
    itemName,
    subcategoryName,
    shortDescription,
    price,
    processTime,
    rating,
    customization,
    stockStatus,
    photo,
  } = data;

  const handleUpdateCraft = (event) => {
    event.preventDefault();

    const form = event.target;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const processTime = form.processTime.value;
    const name = form.name.value;
    // const UserEmail = form.email.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photo.value;
    // const email = user?.email;

    const UpdatedInfo = {
      itemName,
      subcategoryName,
      shortDescription,
      price,
      processTime,
      name, //email
      rating,
      customization,
      stockStatus,
      photo,
    //   UserEmail,
    };
    console.log(UpdatedInfo);

    fetch(`https://assignment-ten-server-liart.vercel.app/allArtAndCraft/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            icon: "success",
            title: "Yaeee...",
            text: "Update Craft Item successfully",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="">
        <h2 className="text-3xl font-extrabold text-center rounded-t-3xl bg-[#B3D9FF] py-8 md:w-4/5 mx-auto shadow-2xl">
          Update : {itemName}
        </h2>
        <form
          onSubmit={handleUpdateCraft}
          className="bg-[#F2F9FC] p-6 md:p-12 lg:p-24 md:w-4/5 mx-auto shadow-2xl"
        >
          <div className="md:flex mb-1 md:mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="itemName"
                  defaultValue={itemName}
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
                  defaultValue={subcategoryName}
                  placeholder="Subcategory Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortDescription"
                  defaultValue={shortDescription}
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
                  defaultValue={price}
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="processTime"
                  defaultValue={processTime}
                  placeholder="give process time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-6">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <select
                name="stockStatus"
                className="w-full p-4 border rounded-xl"
                defaultValue={stockStatus}
                // value={stock}
                onChange={handleStock}
              >
                <option value="">Select an option</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>

          <div className="md:flex mb-4 gap-6">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Customization ?</span>
              </label>
              <select
                name="customization"
                defaultValue={customization}
                className="w-full p-4 border rounded-xl"
                // value={customization1}
                onChange={handleCustomization}
              >
                <option value="">Select an option</option>
                <option value="YES">Yes</option>
                <option value="NO">NO</option>
              </select>
            </div>

            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Give rating out of 5</span>
              </label>
              <select
                name="rating"
                defaultValue={rating}
                className="w-full p-4 border rounded-xl"
                // value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">give rating</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
              </select>
            </div>
          </div>

          {/* comment  */}

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
                  defaultValue={photo}
                  placeholder=" use image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Craft Item"
            className="btn btn-block btn-secondary text-black font-extrabold text-2xl"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCraft;
