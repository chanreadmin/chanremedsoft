import React from 'react'

import './Partnership.css'
const Partnership = () => {
    return (<>

        <div className='container '>
            <div className='row logorow'>
                <div className='col-md-8 offset-2'>
                    <div className='mylogo'>
                        <div className=''>
                            <img src='../ibm.jpg' alt='test' className='logoImage' />
                        </div>
                        <div className=''>
                            {/* <img className='logoImage' src='https://chanrericr.com/images/chanrelogo.png' alt='logo' /> */}
                        </div>
                    </div>

                    <strong>  <p className='font-bold'>
                        As a Silver Partner of IBM, Chanre Med Soft has authorization to sell IBM software products such as SPSS (Statistical Package for the Social Sciences). </p><p> This partnership indicates that Chanre Med Soft has met certain criteria set by IBM and has demonstrated expertise in IBM products and solutions.</p><p> As an authorized partner, Chanre Med Soft can provide customers with access to IBM software products, including SPSS, along with support and services related to these products.
                        </p></strong>
                </div>
            </div>
        </div >

    </>
    )
}

export default Partnership