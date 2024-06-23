import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom"; // Import the Link component
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function StickyNavbar({ isAuth, setIsAuth }) {
  const [openNav, setOpenNav] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logOut = () => {
    localStorage.removeItem("userID");
    setIsAuth(false)
    toast.success("User Logged Out", {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    navigate('/login')
    // let status = localStorage.getItem("uid");
    // if (status) {
    //   localStorage.setItem("logOut", "true");
    //   localStorage.removeItem("uid");
    //   toast.success("User Successfully Log Out", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     transition: Bounce,
    //   });
    //   navigate("/login");
    // } else {
    //   toast.error("Can't Logout, First Login or SignUp", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     transition: Bounce,
    //   });
    // }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <ToastContainer /> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center text-red-500">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/about" className="flex items-center text-red-500">
          About
        </Link>
      </Typography>
      {!isAuth ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/login" className="flex items-center text-red-500">
            Signup/Login
          </Link>
        </Typography>
      ) : (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <button onClick={logOut}>Log Out</button>
        </Typography>
      )}
    </ul>
  );

  return (
    <div className="pt-0 mt-0 max-h-[768px] w-[calc(100%+48px)] w-screen ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none bg-black px-4 py-2 lg:px-8 lg:py-4 border-none">
        <div className="flex items-center justify-between text-red-500">
          <Typography
            as={Link} // Use Link component here
            to="/"
            className="text-3xl mr-4 cursor-pointer font-extrabold py-1.5 "
          >
            To Do List
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        {/* Your content goes here */}
      </div>
    </div>
  );
}
