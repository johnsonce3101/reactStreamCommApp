import React from "react";
import './SoundCloud';
import '../index.css';
import ReactSoundcloud from "./SoundCloud";
import YouTube from './YouTube';
import PayPal from "./PayPal";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#000',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: 'rgb(243, 72, 4)',
      contrastText: '#fff',
    },
  },
});








const Home = () => {


    return (
        <div>
        <div className="allcontainer">
              <div>
                </div>
            <div className="Mcontainer">
                <div className="block">
                    <div className="Mtext">
                        <h4 className="">MERCH</h4>
                        <p>This section conceptually will contain new or most current Merch </p>
                    </div>
					<div>
					<ThemeProvider theme={theme}>
                    <Button color="neutral" variant="contained" href="https://virtchat.netlify.app/">JOIN VIRTCHAT</Button>
					</ThemeProvider>	
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