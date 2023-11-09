import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import productdata from '../../productlist.json'
import FooterSection from '../Home/FooterSection';
function About() {

 console.log(productdata)
  // const [data, setData] = useState([]);
  fetch(productdata)
  .then(response => response.json())
  .then(response => console.log(response)).catch(error => console.log(error))


  useEffect(()=>{
   
  },[])
  return (
    <div className='container-fluid'>
      <div className="headlines mt-5" data-aos="fade-right">
        <h2>
          About <span className="text-primary">Us</span>
        </h2>
        <p>
          Chanre Med Soft
        </p>
      </div>
       <div className='row mt-2'>
       <div className='col-md-2'></div>
       <div className='col-md-8 card-text'>
        <p>ChanRe Medsoft is a Medical software provider company, dedicated to enable smarter care in the healthcare industry from past 25+ years. We take pride in designing leading- edge healthcare information technology solutions for healthcare organizations of every size. Focused on value-based care, we create comprehensive, integrated platforms to improve the way practitioners work by offering a wide variety of medical software’s to integrate according to their specifications.</p>
        <h3>Why us?</h3>
        <p><strong>Serves Thousands of Providers: </strong>
         ChanRe Medsoft aims to create a future where healthcare practitioners have more time to focus on their practice. Toachieve this, they have continuously expanded their reach to bring their software solutions closer to their target market. Over the years, they managed to connect practitioners at more than __ provider facilities across the country.
        </p>

        <p><strong>Strategic Relationships: </strong>
        ChanRe Medsoft collaborates with some of the most reputable technology, service and software providers around the country. This way, we can create better software solutions for our clients.
        </p>

        <p><strong>Large Workforce Dedicated to Excellence: </strong>
        ChanRe Medsoft has an adequate workforce, having diverse experiences in healthcare, our staff members bring to the table, varying ideas that make developing e-health software much more efficient.
        </p>

        <p><strong>Continuous Software Support: </strong>
        Whether you are having difficulties implementing our software or are simply looking to get more from our technology, we will give you the resources you need. We demonstrate on webinars and live demo in your sector to help you understand more about our products.
        </p>
       </div>
       <div className='col-md-2'></div>
       </div>
       <FooterSection/>
    </div>
  )
}

export default About