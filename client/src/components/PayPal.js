import React, {useState, useEffect, useRef} from "react";
import Fab from '@mui/material/Fab';
import logo from './Si_Logo.png';
import gif from './gif.gif';

export default function PayPal() {
    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);
    
    let paypalRef = useRef();
    
    
    const product = {
      price: 8.65,
      description: "Donation",
    };
    
    useEffect(()=> {
    
      const script = document.createElement("script");
      script.src ="https://www.paypal.com/sdk/js?client-id=AYaAEDtLbsBnq8mqAoRvuNR9ogwEOh0FigFwtwhKr0lfkeRs2BFK1dfexEjcMmqhWBjYbxCI4Gf9g9BN"
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    
      if(loaded) {
        setTimeout(() => {
          window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units:[
                  {
                    description: product.description,
                    amount:{
                      currency_code:"USD",
                      value:product.price
                    }
                  }
                ]
              });
          },
          onApprove:async (data, actions) => {
            const order = await actions.order.capture();
    
            setPaidFor(true);
    
            console.log(order);
          },
        })
          .render(paypalRef);
        });
      }
    
    });
    return (
        <div>
            <div className="Pbutton">
  
    <button >
    <div>
      {paidFor ? (
        <div>
          <h1>Appreciate the love</h1>
          <img alt="KR" src={gif} />
        </div>
      ) : (
        <div>
          <h1>
            {product.description} for ${product.price}
          </h1>
          <img alt="symbol" src={logo} width="100" />
          <div ref={v=> (paypalRef = v)} />
        </div>
      )}
    </div>
    </button>

    </div>
            
        </div>
    )
}
