import React from 'react';
import './Navigation.css';

const Navigation = ({isSignedIn, onRouteChange}) => {
    if(isSignedIn) {
        return (
            <nav>
                <p onClick={()=>onRouteChange('signout')} 
                    className='flex f3 link dim black underline pa3 pointer'>
                    Sign Out
                </p>
            </nav>
        );
    } else {
        return(
            <nav>
                <p onClick={()=>onRouteChange('signin')} 
                    className='flex f3 link dim black underline pa3 pointer'>
                    Sign In
                </p>
                <p onClick={()=>onRouteChange('register')} 
                    className='flex f3 link dim black underline pa3 pointer'>
                    Register
                </p>
            </nav>
        );
    }

}

export default Navigation;