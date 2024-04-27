import { useState } from "react";

const AddCraftItem = () => {
  // State to store the selected value
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle change in selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
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
    




  };
  return (
    <div className="">
      <h2 className="text-3xl font-extrabold text-center bg-[#B3D9FF] py-8 md:w-4/5 mx-auto shadow-2xl">
        Add a Coffee
      </h2>
      <form
        onSubmit={handleAddCraft}
        className="bg-[#F2F9FC] p-24 md:w-4/5 mx-auto shadow-2xl"
      >
        {/* form name and quantity row */}
        <div className="md:flex mb-4">
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
                name="shortDescription
                  "
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
              <option value="option1"> 1</option>
              <option value="option2"> 2</option>
              <option value="option3"> 3</option>
              <option value="option4"> 4</option>
              <option value="option5"> 5</option>
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
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {/* Default placeholder option */}
              <option value="">Select an option</option>
              {/* Other options */}
              <option value="option1">Yes</option>
              <option value="option2">NO</option>
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
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {/* Default placeholder option */}
              <option value="">Select an option</option>
              {/* Other options */}
              <option value="option1">In stock</option>
              <option value="option2">Made to Order</option>
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
        <input type="submit" value="Add Craft Item" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCraftItem;
