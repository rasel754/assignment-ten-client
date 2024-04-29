import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { BsGoogle, BsGithub } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
    const auth = getAuth(app);
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const { signIn, setUser,setLoading } = useContext(AuthContext);

  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithPopup( auth, googleProvider)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      setUser(result.user);
      setSuccess(Swal.fire("google login successful"))
      navigate('/')

      .catch((err) => {
        console.error(err);
      });
    });
  };

  const handleGithubLogin = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        setSuccess(Swal("successfully Login with Github"));
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);

    const email = form.get("email");
    const password = form.get("password");
    setSuccess("");

    signIn(email, password)
    .then((result) => {
      setUser(result.user);
      console.log(result.user);
      navigate('/')
    });

    setSuccess(Swal.fire("Login successful with gmail and password")).catch(
      (error) => {
        console.error(error);
        setRegisterError(
          Swal("please provide a valid email address and password")
        );
      }
    );
  };

  return (
    <div>
      <div className="">
        <h1 className="text-3xl text-center mt-5 md:w-3/4 lg:w-1/2 mx-auto p-6 rounded-t-3xl font-semibold bg-[#2957FD]">Login your account</h1>
        <form
          onSubmit={handleLogin}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-[#cbd5e1] shadow-2xl	"
        >
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary ">Login</button>
          </div>
        </form>
        <div className="divider divider-info md:w-3/5 lg:w-1/3 mx-auto">OR</div>
        <div className="flex  mx-auto mb-3 w-1/2 md:w-1/4 p-2 border-4">
          <span className="mx-auto flex gap-9">
            <button onClick={handleGoogleLogin}>
              <BsGoogle className="text-3xl"></BsGoogle>
            </button>
            <button onClick={handleGithubLogin}>
              <BsGithub className="text-3xl "></BsGithub>
            </button>
          </span>
        </div>
        <p className="text-center ">
          do not have a account ? please{" "}
          <span className="text-red-700 font-semibold">
            <Link to="/register">Register</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
