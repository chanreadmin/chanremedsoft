import React from 'react'

import './Partnership.css'
import FooterSection from '../Home/FooterSection'
const Partnership = () => {
    return (<>

        <div className='container '>
            <div className='row logorow'>
                <div className='col-md-8 offset-2'>
                    <div className='mylogo'>
                        <div className='' data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <img src='../ibm.jpg' alt='test' className='logoImage' data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-duration="1500" />
                        </div>
                        <div className=''>
                            {/* <img className='logoImage' src='https://chanrericr.com/images/chanrelogo.png' alt='logo' /> */}
                        </div>
                    </div>

                    <strong>  <p className='font-bold' data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        As a Silver Partner of IBM, Chanre Med Soft has authorization to sell IBM software products such as SPSS (Statistical Package for the Social Sciences). </p>
                        <p data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"> This partnership indicates that Chanre Med Soft has met certain criteria set by IBM and has demonstrated expertise in IBM products and solutions.</p>
                        <p data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"> As an authorized partner, Chanre Med Soft can provide customers with access to IBM software products, including SPSS, along with support and services related to these products.
                        </p></strong>
                </div>
            </div>
        </div >
        <FooterSection />
    </>
    )
}

export default Partnership