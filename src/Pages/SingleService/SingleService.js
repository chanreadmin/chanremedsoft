import React, { useEffect, useState } from "react";
import productdata from "../../servicelist.json";
import { Link, useParams } from "react-router-dom";
import FooterSection from "../Home/FooterSection";
import './SingleService.css'

function SingleService() {

  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();

  const data = productdata;


  const fetchDataById = (id) => {
    const item = data.find((item) => item.id === parseInt(id));
    setSelectedItem(item);
  };
  console.log(id);

  useEffect(() => {
    fetchDataById(id);
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {selectedItem ? (
            <div>
              <div className="headlines " data-aos="fade-right">
                <h2>
                  <span className="text-primary">{selectedItem.title}</span>
                </h2>
                <p><b>{selectedItem.tagline}</b></p>
              </div>
              <div className="d-flex justify-content-center thumbnail mt-4 mb-4"><img src={selectedItem.picture} alt={selectedItem.title}/></div>
              <div className="text-dark font-weight-bold">
                <div dangerouslySetInnerHTML={{ __html: selectedItem.desc }}/>
              </div>
              
            </div>
          ) : (
            <p>No item selected</p>
          )}
            <div className="d-flex justify-content-center">
                <Link to={`/contact`} className="btn btn-primary text-white font-weight-bold">Contact Us</Link>
            </div>
          
        </div>
        <div className="col-md-2"></div>
      </div>
      {/* <h1>Single Product</h1> */}
      <FooterSection/>
    </div>
  );
}

export default SingleService;
