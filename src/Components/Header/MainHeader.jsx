import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import LoginDiv from "./LoginDiv";
import Image from "../Image";
import { SearchContext } from "../Context/searchContext";
import ToggleLightDark from "./ToggleLightDark";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";

export default function MainHeader() {
  const [searchParams , setSearchParams] = useSearchParams();
  const [scrolled, setScrolled] = useState(false);
  const [showLoginDiv, setShowLoginDiv] = useState(false);
  // const [value , setValue] = useState('');
  const [mode, setMode] = useState(false);
  const [experience , setExperience] = useState(false);
  const ref2 = useRef(null);
  const { value, setValue } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(()=>{
    const query = searchParams.get('q');
    if(query){
      setValue(query);
      console.log(query);
    }
  },[searchParams, setValue , value])

  function handleScroll() {
    if (document.documentElement.scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const toggleTheme = ()=>{
    setMode(!mode);
    document.body.classList.toggle("dark-mode");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLoginDiv(event) {
    event.stopPropagation();
    setShowLoginDiv((previous) => !previous);
  }

  function handleValue(event) {
    const newSearchedValue = event.target.value;
    setValue(newSearchedValue);
    setSearchParams({q:newSearchedValue});
  }

  const handleExperience = () => {
    setExperience(!experience);
    navigate('/experience');
  }

  return (
    <>
      <header className={`${scrolled ? "newHeader headerToggle" : "headerToggle"}`}>
        <div className="upperHeader">
          <div className="leftDiv">
            <Link to='/'>
            <Image src={"/abode.svg"} alt="" className="headerIcon" />
            </Link>
            <p className={scrolled ? 'abodeNameHide':'abodeName'}><Link to='/'>airbnb</Link></p>
          </div>
          <div className={`middleDiv`}>
            <div className={`middleLeftInnerDiv ${scrolled ? "hidden" : ""}`}>
              <p>Stays</p>
              <p onClick={handleExperience}>Experiences</p>
            </div>
            <div className={`middleRightInnerDiv ${scrolled ? "movedUp" : ""}`}>
              <div className="search-Div">
                <input
                  type="text"
                  placeholder="Search Destination"
                  className={
                    scrolled ? "searchInput searchMovedUp" : "searchInput"
                  }
                  value={value}
                  onChange={handleValue}
                />
              </div>
              <div
                className={`searchDiv ${scrolled ? "movedUpSearchDiv" : ""}`}
              >
                <button className={`searchButton`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`rightDiv`}>
            <li><Link to='/abode'>airbnb your home</Link></li>
            <Image
              src={mode ? "/light.svg" : "/dark.svg"}
              alt=""
              className={mode ? "light-mode toggle" : "dark-mode toggle"}
              onClick={toggleTheme}
            />
            <div className="userLoginDiv" onClick={handleLoginDiv} ref={ref2}>
              {showLoginDiv && (
                <LoginDiv
                  showLoginDiv={showLoginDiv}
                  setShowLoginDiv={setShowLoginDiv}
                  ref2={ref2}
                />
              )}
              <div className="userLoginInnerDiv">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M111.87-228.28v-91h736.26v91H111.87Zm0-206.22v-91h736.26v91H111.87Zm0-206.22v-91h736.26v91H111.87Z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M32.59-147.8v-120.61q0-36.23 18.74-66.59 18.74-30.37 49.8-46.35 62.72-31.24 127.66-46.98 64.95-15.74 131.93-15.74 67.43 0 132.39 15.62 64.96 15.62 127.19 46.86 31.06 15.95 49.81 46.25 18.74 30.3 18.74 66.91v120.63H32.59Zm739.85 0v-127.9q0-44.95-24.27-86.65-24.26-41.69-69.97-74.28 48.37 6.48 91.45 20.62 43.09 14.14 81.13 34.42 36.96 20 56.8 47.21 19.83 27.2 19.83 59.4v127.18H772.44ZM360.72-484.07q-67.92 0-115.99-48.07-48.08-48.08-48.08-115.99t48.08-115.99q48.07-48.08 115.99-48.08 67.91 0 115.99 48.08 48.07 48.08 48.07 115.99t-48.07 115.99q-48.08 48.07-115.99 48.07Zm411.72-164.06q0 67.67-48.19 115.87-48.18 48.19-115.84 48.19-11.28 0-28.04-2.61-16.76-2.62-28.72-6.1 27.48-32.48 42.1-72.4 14.62-39.92 14.62-82.92 0-42.99-14.62-82.94-14.62-39.96-42.1-72.44 14.24-5.24 28.24-6.98 14-1.74 28.37-1.74 67.72 0 115.95 48.2 48.23 48.19 48.23 115.87ZM123.59-238.8h474.26v-28.42q0-10.77-5.5-19.58-5.5-8.81-14.5-13.7-52.57-26.04-106.85-39.3-54.28-13.27-110.28-13.27-55.52 0-110.29 13.27-54.76 13.26-106.84 39.3-9 4.89-14.5 13.7-5.5 8.81-5.5 19.58v28.42Zm237.09-332.68q31.6 0 54.15-22.5 22.54-22.51 22.54-54.11 0-31.61-22.51-54.15-22.5-22.54-54.1-22.54-31.61 0-54.15 22.5-22.54 22.51-22.54 54.11 0 31.6 22.5 54.15 22.51 22.54 54.11 22.54Zm.04 332.68Zm0-409.33Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
