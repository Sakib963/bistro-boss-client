import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const navigate = useNavigate();
    const {createUser, updateUserProfile} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
    .then(res=> {
        const loggedUser = res.user;
        
        updateUserProfile(data.name, data.photoUrl)
        .then(() => {
            console.log('Profile Updated')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Signed Up Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })

        console.log(loggedUser)
    })
    .catch(error => {
        console.log(error);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
        <Helmet>
                <title>Sign Up | Bistro Boss</title>
            </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                {...register("photoUrl", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters.</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less or equal than 20 characters.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must contain at least one upppercase, one lowercase, one special character and a digit.
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Sign Up" className="btn btn-primary"/>
              
            </div>
          </form>
          <p className='text-center pb-3'>Already Have an account? <Link to='/login' className='link-hover text-orange-600'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
