import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams, Outlet,
     Navigate, useSearchParams ,
      useNavigate
    } from 'react-router-dom';

function Navigation(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/user/Mayank">Profile</Link></li>
            </ul>
        </nav>   
    )
}

function UserProfile(){
    const {userId} = useParams();
    return(
        <h2>User Profile Of {userId}</h2>
    )
}


function Home(){
    const navigate = useNavigate();
    function handleGoToAbout(){
        navigate('/about');
    }
    return(
        <>
            <h2>HOME</h2>
            <button onClick={handleGoToAbout}>click</button>
        </>
    )
}

function About(){
    return(
        <>
            <h2>About</h2>
            <Outlet/>
        </>
    )
}

function Team(){
    return(
        <h2>Team</h2>
    )
}

function History(){
    return(
        <h2>History</h2>
    )
}

function ProtectedRoute({isLoggedIn , children}){
    return isLoggedIn ? children: <Navigate to='/logIn'/>
}

function Login(){
    return(
        <h2>Please Login</h2>
    )
}

function NotFound(){
    return(
        <h2>404 Page Not Found</h2>
    )
}

function SearchPage(){
    const [searchParams , setSearchParams] = useSearchParams();
    const [value , setValue] = useState('');
    const query = searchParams.get('q');
    const handleValue = (e) => {
        setValue(e.target.value);
        setSearchParams({q:value});
    }
    
    return (
        <>
        <input type="text" onChange={handleValue} value={value}/>
        <h2>Page Searched {query}</h2>
        </>
    )
}

export default function App() {
  return (
    <Router>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>} />
             <Route path='/about' element={<About/>}> 
               <Route path='team' element={<Team/>}/>
                <Route path='history' element={<History/>}/>
             </Route>
            <Route path='/user/:userId' element={<UserProfile/>}/>
            <Route path='/logIn' element={<Login/>}/>
            <Route path='/dashBoard' element={<ProtectedRoute isLoggedIn={true}><h2>DashBoard</h2></ProtectedRoute>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/*' element={<NotFound/>}/>    
        </Routes>
    </Router>
    )
}







//For Search Parameter
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useSearchParams } from 'react-router-dom';

// function Navigation() {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/user/Mayank">Profile</Link></li>
//                 <li><Link to="/search">Search</Link></li>
//             </ul>
//         </nav>
//     );
// }

// function SearchPage() {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [value, setValue] = React.useState(searchParams.get('q') || '');

//     const handleValueChange = (e) => {
//         const newValue = e.target.value;
//         setValue(newValue);
//         setSearchParams({ q: newValue });
//     };

//     const query = searchParams.get('q');

//     return (
//         <>
//             <input
//                 type="text"
//                 onChange={handleValueChange}
//                 value={value}
//             />
//             <h2>Page Searched: {query}</h2>
//         </>
//     );
// }

// export default function App() {
//     return (
//         <Router>
//             <Navigation />
//             <Routes>
//                 {/* Define other routes here */}
//                 <Route path='/search' element={<SearchPage />} />
//                 {/* Add routes for Home, About, UserProfile, etc. */}
//             </Routes>
//         </Router>
//     );
// }
