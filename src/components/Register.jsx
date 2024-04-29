import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Register = () => {
 const [registerError, setRegisterError] = useState("");
  const { createRegister } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false)


  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    setRegisterError("");
    setSuccess("");

    

    if (password.length < 6) {
      setRegisterError(
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password should be at least 6 characters........please provide a valid password",
            footer: '<a href="#">Why do I have this issue?</a>'
          })
       
      );
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setRegisterError(
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: " Password should contain at least one uppercase letter and one lowercase letter......please create a strong password!",
            footer: '<a href="#">Why do I have this issue?</a>'
          })
      );
      return;
    }

    createRegister(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess(Swal.fire("Successfully registered with RS RESIDENT.....!"));
      })
      .catch(err => {
        console.error(err);
      });
  };
    return (
        <div>
      <div>
        <h1 className="text-3xl text-center mt-5 md:w-3/4 lg:w-1/2 mx-auto p-6 rounded-t-3xl font-semibold bg-[#2957FD]">
        <Typewriter
          words={['Please ...', 'Register your account']}
          />
          </h1>
        <form
          onSubmit={handleRegister}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Submit Your photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

         <div className="relative ">
         <div className="form-control ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            type={showPassword?"text" :"password"}
              name="password"
              placeholder="password"
              className="input input-bordered relative"
              required
            /><span className=" absolute end-1 top-12 pr-2 text-3xl" onClick={()=>setShowPassword(!showPassword)}>
            {
              showPassword? <FaEyeSlash /> : <FaEye />
            }
            </span>
         </div>
            
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center ">
          {" "}
          already have an account ? please{" "}
          <span className="text-blue-700 font-semibold">
            <Link to="/login">Login</Link>
          </span>{" "}
        </p>
      </div>
    </div>
    );
};

export default Register;