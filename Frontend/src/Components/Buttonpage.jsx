import React from "react";
import { FcCalendar } from 'react-icons/fc'
import { GoPerson } from 'react-icons/go'
import {TbChevronRight} from 'react-icons/tb'
import { FiChevronDown } from 'react-icons/fi'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import { AiFillCreditCard } from 'react-icons/ai'

const ButtonPage = () =>{
    return (
        <div id="whole-page">
            <h1 style={{color: "#202843",fontSize: "1.4705882352941178em",marginTop:"10px",fontWeight:"bold"}}>Secure booking — only takes 2 minutes!</h1>
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
                    <p style={{color:"green",display:"flex",marginTop:"7px",alignItems:"center"}}><TbChevronRight/>Free parking <TbChevronRight/>Free WiFi</p>
                    {/* name.......  */}
                    <div style={{display:"flex"}}>
                        <div className="inputdiv">
                            <p className="name">First Name</p>
                            <input type="text" placeholder="(e.g. John)" className="input"/>
                        </div>
                        <div className="inputdiv">
                            <p className="name">Last Name</p>
                            <input type="text" placeholder="(e.g. Smith)" className="input"/>
                        </div>
                    </div>
                    {/* mobile no. ....  */}
                    <div className="inputdiv">
                        <p className="name">Mobile phone number</p>
                        <div style={{display:"flex"}}>
                            <select className="country">
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

            {/* protect your hotel */}

            <div className="box3">
                <div style={{display:"flex",alignItems:"center"}}>
                    <IoShieldCheckmarkSharp style={{width:"25px",height:"40px"}}/>
                    <h3 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"15px"}}>Protect your hotel</h3>
                    <button style={{background:"#2f7000",marginLeft:"15px",fontWeight:"bold",color:"white",borderRadius:"5px",padding:"0px 5px"}}>Recommended</button>
                </div>
                <div className="alertbox">
                    <p><MdError/><b> Important</b>: Trip cancellation due to government travel advisories, fear of travel, or change of mind is not covered. Travel insurance may provide coverage for COVID-19 diagnosed illness. COVID-19 is a foreseen event and certain other coverages will not apply</p>
                </div>
            </div>
            {/* card details  */}

            <div className="box4">
                <div><AiFillCreditCard style={{height:"25px",width:"30px"}}/></div>
                <div>
                    <p style={{color:"green",display:"flex",marginTop:"10px",marginBottom:"14px",alignItems:"center"}}><TbChevronRight/>  We use secure transmission <TbChevronRight/>  We protect your personal information</p>
                    <p>Debit/Credit Card</p>
                    <hr style={{borderTop:"1px solid #616161"}}/>
                    <div style={{display:"flex",height:"60px",marginTop:"15px"}}>
                        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" alt="" />
                        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" alt="" />
                        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg" alt="" />
                        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg" alt="" />
                        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg" alt="" />
                        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg" alt="" />
                        <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" alt="" />
                    </div>
                    <div className="inputdiv">
                        <p className="name">Name on Card</p>
                        <input type="text" className="input" style={{width:"75%"}}/>
                    </div>
                    <div className="inputdiv">
                        <p className="name">Debit/Credit card number</p>
                        <input type="number" className="input" style={{width:"50%"}}/>
                    </div>
                    <div className="inputdiv">
                        <p className="name">Expiration date</p>
                        <div style={{display:"flex"}}>
                            <select className="country" style={{width:"25%",marginRight:"10px"}}>
                                <option value="usa">Month <FiChevronDown style={{color:"black"}}/></option>
                                <option value="india">January<FiChevronDown style={{color:"black"}}/></option>
                                <option value="china">February<FiChevronDown style={{color:"black"}}/></option>
                                <option value="uk">March<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">April<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">May<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">June<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">July<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">August<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">September<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">October<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">November<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">December<FiChevronDown style={{color:"black"}}/></option>
                            </select>
                            <select className="country" style={{width:"25%"}}>
                                <option value="usa">Year <FiChevronDown style={{color:"black"}}/></option>
                                <option value="india">2020<FiChevronDown style={{color:"black"}}/></option>
                                <option value="china">2021<FiChevronDown style={{color:"black"}}/></option>
                                <option value="uk">2022<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">2024<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">2025<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">2026<FiChevronDown style={{color:"black"}}/></option>
                                <option value="turky">2027<FiChevronDown style={{color:"black"}}/></option>
                            </select>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div className="inputdiv" >
                            <p className="name">Security code</p>
                            <input type="number" className="input" style={{width:"30%"}}/>
                        </div>
                        <div className="inputdiv" >
                            <p className="name">Billing ZIP code</p>
                            <input type="number" className="input" style={{width:"60%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {ButtonPage}