import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLoginBoxFill, RiLogoutBoxRFill, RiAdminFill  } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../redux/api/userApiSlice.js";
import { logout } from "../redux/features/auth/authSlice.js";
import { toast } from "react-toastify";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutUser] = useLogoutUserMutation();

  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full box-sizing border h-[30px] flex justify-between ">
      <div className="flex justify-between mx-4">
        <Link className="flex justify-around px-4" to={"+402-464-2441"}>
          <FaPhoneAlt className="h-[25px] mr-1" />
          +402-464-2441
        </Link>
        <Link className="flex justify-around" to={"shopjsx@gmail.com"}>
          <MdEmail className="h-[25px] mr-1" />
          e-shop@gmail.com
        </Link>
      </div>
      <div className="flex justify-between mx-4">
        {userInfo?.isAdmin && (
          <Link className="flex justify-around" to={"/admin"}>
            <RiAdminFill className="h-[25px] mr-1" />
            Admin Menu
          </Link>
        )}
        <Link className="flex justify-around px-4" to={"/profile"}>
          <FaUserCircle className="h-[25px] mr-1" />
          My account
        </Link>
        {!userInfo ? (
          <Link className="flex justify-around" to={"/login"}>
            <RiLoginBoxFill className="h-[25px] mr-1" />
            Login
          </Link>
        ) : (
          <Link className="flex justify-around" onClick={logoutHandler}>
            <RiLogoutBoxRFill className="h-[25px] mr-1" />
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
