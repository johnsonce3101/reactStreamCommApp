import React from "react";
import './SoundCloud';
import '../index.css';
import ReactSoundcloud from "./SoundCloud";
import YouTube from './YouTube';
import Join from './Join';
import Chat from './Chat';
import './Join/Join.css'
import Nav from "./nav";
import PayPal from "./PayPal";





const Home = () => {


    return (
        <div>
            <Nav />
        <div className="allcontainer">
              <div>
                    <div>
                        <Join className="JOOC" />
                        {/* <Chat /> */}
                    </div>
                </div>
            <div className="Mcontainer">
                <div className="block">
                    <div className="Mtext">
                        <h4 className="">MERCH</h4>
                        <p>This section conceptually will contain new or most current Merch </p>
                    </div>
                </div>
            </div>
            <div className="Vcontainer">
                <div className="block">
                    <div style={{ paddingBottom: 30 }}>
                        <div style={{ paddingBottom: 10 }} id="vid">
                            <YouTube videoId='p9IKIcIXkJM' />


                        </div>
                    </div>
                    <div style={{ paddingBottom: 30 }}>
                        <div style={{ paddingBottom: 10 }} id="vid">
                            <YouTube videoId='tOqNeE7LTDo' />
                        </div>
                    </div>
                </div>
            </div>
            {/* AUDIO */}
            <div className="SCcontainer">
                <div className="block">

                    <ReactSoundcloud />
                    <ReactSoundcloud url="https://soundcloud.com/tn-si/rayne-p2" />
                    <div>
                      <PayPal />
                    </div>
                </div>
                <div>
                    <div>
                      
                    </div>
                </div>
            </div>
        </div>
        </div>




    )
}

export default Home