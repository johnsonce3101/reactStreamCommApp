import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



const Navbar = () => {
    return (
        <div>
            <AppBar style={{ background: '#000000' }}>
                <Toolbar>
                    <div className="nav-top">
                <a id="Hlink" className="AB" href="/home">VIRTUOSOS</a>
                <a id="lowerlink" className="ol" href="/events">Events</a>
                <a id="lowerlink1" className="ol1" href="/IG">IG</a>
                <a id="lowerlink2" className="ol2" href="/TT">TikTok</a>
                </div>
                </Toolbar>
                <div className="nav-bottom">
                    <a id="lowerlinks" className="AB2" href="/merch">MERCH</a>
                    <a id="lowerlinks" className="AB3" href="/videos">VIDEOS</a>
                    <a id="lowerlinks" className="AB4" href="/audio">AUDIO</a>
                    </div>
            </AppBar>
            <Toolbar/>
            <Toolbar/>
            
        </div>
    )
}

export default Navbar
