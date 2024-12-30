import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopUp } from "src/redux/loginSignupSlice"
import { setUserData } from "src/redux/userSlice";
import no_user_img from "assets/avatar.jpg"
import { logout } from "src/utils/services";
import { menuConfig } from "src/utils/constants";
import { CgProfile } from "react-icons/cg";



const NavBar = () => {
  const user = useSelector((state: any) => state.user.data);
  const [navbar, setNavbar] = useState(false);
  const [showNavSlider, setShowNavSlider] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])

  const changeBackgroundColor = () => {
    if (window.scrollY > 100) setShowNavSlider(false)
    if (window.scrollY >= 14) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  async function handleLogout() {
    const resp = await logout()
    if (resp) {
      dispatch(setUserData(null));
      navigate("/");
    }
  }


  window.addEventListener("scroll", changeBackgroundColor);


  function handleNavSlider() {
    window.scroll(0, 0);
    setShowNavSlider(!showNavSlider);
  }

  return (
    <div className="header relative">
      <div className={navbar ? "navbar navactive flex w-full px-[5rem] py-3 fixed z-[999]" : "navbar flex w-full px-[5rem] py-3 fixed z-[999]"}>
        <div className="navbar-left w-1/3 lg:w-[40%] flex items-center">
          <div className="flex gap-2 nav-logo-name text-[32px] font-semibold text-primaryNavText">
            <img src="./logo/Untitled design.png" className="h-[50px]"></img>
            <Link className="text-primaryNavText" to={"/"}>
              CareerBanao
            </Link>
          </div>
        </div>
        <div className="navbar-right w-full lg:w-[60%] flex items-center">
          <ul className="navlinks hidden lg:flex w-full font-semibold justify-around text-[18px] items-center text-primaryNavText">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
            <Link to={'/CollegeFinder'}>
             <button className="font-semibold px-3 rounded-lg border-2 hover:scale-105 transition-transform transform animate-border-color">
               College Finder
             </button>

            </Link>

            </li>
            <li>
               <Link to={'/admissions'}><button>Admission</button></Link>

            </li>
            <li>
            <Link to={'/Counselling'}>
              <button>Counselling</button>
            </Link>

            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            {user == null ?
              <li>
                {/* <button
                  onClick={() => { dispatch(setShowPopUp()) }}
                  type="button"
                  className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
                >
                </button> */}
                <CgProfile size={'30'} className="cursor-pointer" onClick={() => { dispatch(setShowPopUp()) }} />
              </li>
              :
              <>
                <li className="rounded-full bg-[#edede9]"><img src={user.photoUrl ? user.photoUrl : no_user_img} width={40} className="rounded-full mix-blend-multiply" alt="" /></li>
                <li>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
                  >
                    Logout
                  </button>
                </li>
              </>
            }


          </ul>
          <div className="hamburger-menu w-full text-right text-2xl cursor-pointer lg:hidden ">
            <MenuOutlined onClick={handleNavSlider} 
               onPointerEnterCapture={() => {}}
               onPointerLeaveCapture={() => {}}/>
          </div>
        </div>
      </div>
      {showNavSlider && <NavSlider user={user} handleLogout={handleLogout} handleNavSlider={handleNavSlider} dispatch={dispatch} />}
    </div>
  );
};


export default NavBar;

function NavSlider({ handleNavSlider, handleLogout, dispatch, user }: any) {
  const admlist = useSelector((state: any) => state.navList.admissionList);
  const couslist = useSelector((state: any) => state.navList.counsellingList);
  let admissonItems = [
    {
      key: "1",
      label: (
        <Link to={"/admissions"} onClick={handleNavSlider}>
          Engineering
        </Link>
      ),
      title:menuConfig.admEng
    },
    {
      key: "2",
      label: (
        <Link to={"admissions/management"} onClick={handleNavSlider}>
          Management
        </Link>
      ),
      title:menuConfig.admManag
    },
    {
      key: "3",
      label: (
        <Link to={"admissions/medical"} onClick={handleNavSlider}>
          Medical
        </Link>
      ),
      title:menuConfig.admMed
    },
  ];
  let counsellingItems = [
    {
      key: "1",
      label: (
        <Link to={"/counselling"} onClick={handleNavSlider}>
          Engineering
        </Link>
      ),
      title:menuConfig.counsEng
    },
    {
      key: "2",
      label: (
        <Link to={"/counselling/management"} onClick={handleNavSlider}>
          Management
        </Link>
      ),
      title:menuConfig.counsManag
    },
    {
      key: "3",
      label: (
        <Link to={"/counselling/medical"} onClick={handleNavSlider}>
          Medical
        </Link>
      ),
      title:menuConfig.counsMed
    },
  ]
  if(admlist){
    admissonItems = admissonItems?.filter((item)=>(
      admlist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
    ))
  }
  if(couslist){
    counsellingItems = counsellingItems?.filter((item)=>(
      couslist?.find((listItem:ApplicationConfigType)=> item.title == listItem.module_name)
    ))
  }
  return (
    <div className="navslider h-[50vh] bg-primaryNavBackground relative top-[80px] lg:hidden">
      <ul className="text-white text-[18px] flex flex-col gap-4 p-5 h-full">
        <li>
          <Link to={"/"} onClick={handleNavSlider}>
            Home
          </Link>
        </li>
        <li>
            <Link to={'/CollegeFinder'}>
            <button className="font-semibold px-3 rounded-lg border-2 hover:scale-105 transition-transform transform animate-border-color">
               College Finder
             </button>
              </Link>

            </li>
            <li>
               <Link to={'/admissions'}><button>Admission</button></Link>

            </li>
            <li>
            <Link to={'/Counselling'}>
              <button>Counselling</button>
            </Link>

            </li>
        <li>
          <Link to={"/contact"} onClick={handleNavSlider}>
            Contact
          </Link>
        </li>
        {user == null ?
          <li>
            {/* <button
              onClick={() => { dispatch(setShowPopUp()) }}
              type="button"
              className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
            >
            </button> */}
            <CgProfile onClick={() => { dispatch(setShowPopUp()) }} />
          </li>
          :
          <li>
            <button
              onClick={handleLogout}
              type="button"
              className="text-primaryNavText bg-white hover:bg-primaryNavBackground hover:text-white outline rounded-full text-center dark:focus:ring-yellow-900 p-[0.3rem] text-[16px] w-[6rem]"
            >
              Logout
            </button>
          </li>
        }
      </ul>
    </div>
  );
}


