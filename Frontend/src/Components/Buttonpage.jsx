import React from "react";
import { FcCalendar } from 'react-icons/fc'
import { GoPerson } from 'react-icons/go'
import {TbChevronRight} from 'react-icons/tb'
import { FiChevronDown } from 'react-icons/fi'

const ButtonPage = () =>{
    return (
        <div id="whole-page">
            <h1 style={{color: "#202843"}}>Secure booking — only takes 2 minutes!</h1>

            <div className="box1">
                <FcCalendar style={{height:"50px",width:"50px"}}/>
                <div>
                    <p id="box1-p1">Free cancellation before Tue, Aug 30, 6:00pm (property local time)</p>
                    <p id="box1-p2">You can change or cancel this stay for a full refund if plans change. Because flexibility matters.</p>
                </div>
            </div>

            <div className="box2">
                <div><GoPerson style={{height:"25px",width:"30px"}}/></div>
                <div>
                    <p><b>Room 1:</b> 2 Adults 1 King Bed Smoking</p>
                    <p style={{color:"green"}}><TbChevronRight/>Free parking <TbChevronRight/>Free WiFi</p>
                    {/* name.......  */}
                    <div style={{display:"flex"}}>
                        <div >
                            <p className="name">First Name</p>
                            <input type="text" placeholder="(e.g. John)" className="input"/>
                        </div>
                        <div >
                            <p className="name">Last Name</p>
                            <input type="text" placeholder="(e.g. Smith)" className="input"/>
                        </div>
                    </div>
                    {/* mobile no. ....  */}
                    <div>
                        <p className="name">Mobile phone number</p>
                        <div style={{display:"flex"}}>
                            <select id="country">
                                <option value="usa">USA +1 <FiChevronDown style={{color:"black"}}/></option>
                                <option value="india">INDIA +91 <FiChevronDown style={{color:"black"}}/></option>
                                <option value="china">CHINA +86 <FiChevronDown style={{color:"black"}}/></option>
                                <option value="uk">UK +44 <FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">TURKY +90 <FiChevronDown style={{color:"black"}}/></option>
                            </select>
                            <input type="text" className="input" placeholder="So the property can reach you" style={{marginLeft:"10px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {ButtonPage}