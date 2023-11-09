import React, { useEffect, useState } from "react";
import productdata from "../../productlist.json";
import { useParams } from "react-router-dom";
import FooterSection from "../Home/FooterSection";
import './SingleProduct.css'
import { Link } from "react-router-dom";

function SingleProduct() {

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
    <div className="container">
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
              <div dangerouslySetInnerHTML={{ __html: selectedItem.desc }}/>
            </div>
          ) : (
            <p>No item selected</p>
          )}
        </div>
        <div className="col-md-2"></div>
        
      </div>
      <div className="row">
        <div className="d-flex justify-content-center">
          <Link to={'/quote'} className="btn btn-primary ">Quotation</Link> &nbsp;
          <Link to={'/quote'} className="btn btn-success">Contact</Link>
        </div>
      </div>
      <div className="row">
        <FooterSection/>
      </div>
      {/* <h1>Single Product</h1> */}
    </div>
  );
}

export default SingleProduct;
