// import React, { useRef } from 'react'


// import React from "react"
// import "./Join.css"

// const Join = () => {
//     return (
//         <div className="Join" id='join-us'>
//             <div className="join-l">
//                 <hr />
//                 <div>
//                     <span className='stroke-text'>READY TO </span>
//                     <span>LEVEL UP</span>
//                 </div>

//                 <div>
//                     <span>YOUR BODY </span>
//                     <span className='stroke-text'>WITH US</span>
//                 </div>
//             </div>
//             <div className="join-r">
//                 <form action="" className='email-container'>
//                     <input type="email" name='user-email' placeholder='Enter your Email' />
//                     <button className='btn btn-j'>Join Now</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Join








import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"



const Join = () => {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();  //it will pevent the page to load any other url
    const userEmail = form.current['user_email'].value;
    if (!userEmail) {
        console.log("current emal");
        console.log("Emial is empty")
        return;
    }
        emailjs.sendForm('service_e5o889e', 'template_j1s7xob', form.current, {publicKey: 'ysF5vJXT8U_imzX92',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };



    return (
        <div className="Join" id='join-us'>
            <div className="join-l">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US</span>
                </div>
            </div>
            <div className="join-r">
                <form 
                 ref={form}
                 action="" 
                 className='email-container' 
                 onSubmit={sendEmail}
                 >
                    <input type="email"  name='user_email' placeholder='Enter your Email'/>
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join

