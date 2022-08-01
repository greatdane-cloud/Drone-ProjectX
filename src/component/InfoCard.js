import React, { useEffect, useState } from 'react';
import { MdInfoOutline } from 'react-icons/md';

function InfoCard() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // get the data from the api
    fetch('https://fe-assignment.vaimo.net/')
      .then((res) => res.json())
      .then((data) => setUserData(data.product))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="product">
        <div className="product-image">
          <img
            src="https://fe-assignment.vaimo.net/product-images/quadcopter-drone-with-camera.jpg"
            className="image"
            alt=""
          />
        </div>
        <div className="product-details">
          <div className="breadcrumbs">
            <span className="breadcrumb breadcrumb--active"></span>
            <span className="breadcrumb">In stock :</span>
            <span className="breadcrumb">Fast dispatch</span>
          </div>

          <div className="title-container">
            <h1 className="title">{userData.name}</h1>
            <span className="sticker">{userData.tags}</span>
          </div>

          <div className="rating">
            <span>⭐⭐⭐⭐⭐⭐ 5.0</span>
            <span className="text--gray">7 reviews</span>
            <span> - </span>
            <span>19 buyers</span>
          </div>

          <span className="separator"></span>

          <div className="price">
            <span className="text--orange price--detail">
              R 78.99 - R 899.2{' '}
            </span>
            <span className="separator-vertical">/</span>
            <span className="text--gray">Option</span>
            <span> 2 Options </span>
            <span className="text--gray">(Min. Order)</span>
          </div>

          <span className="separator"></span>

          <div className="banner">
            <span> *Free shipping </span>
            <span> *On-time delivery guaranteed </span>
            <span>➡️</span>
          </div>
          <div className="discount">
            <span className="text--orange"></span>
            <span className="text--gray"> Discount ends </span>
            <span>2d:1h:56m:49</span>
          </div>
          <div className="options">
            <table>
              <thead>
                <tr>
                  <th colSpan="2"></th>
                  <th colSpan="2"></th>
                  <th colSpan="2"></th>
                  <th colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text--gray">
                  <td>Options</td>
                </tr>

                {Object.values(userData?.options || {}).map((option, i) => {
                  console.log(option);
                  return (
                    <tr key={i}>
                      <td className="text--black">{option.label}</td>
                      <td className="text--black">
                        {option.price.currency.symbol} {option.price.value}
                      </td>
                      <td>
                        <div className="controls">
                          <button className="button-control">+</button>

                          <div className="text--gray"></div>
                          <button className="button-control">-</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="footer text--gray">
            <p className="trade">
              Trade Assurance protects your alibaba orders
            </p>
            <div className="payments">
              <span>Payments 💳💳 ::💳 </span>
            </div>
            <div className="information">
              <span>alibaba.com Logistics</span>
              <span>Inspection solution</span>
            </div>
          </div>
        </div>
        <div className="product-shipping">
          <div className="around">
            <p className="tx">Ship to South Africa</p>
            <p className="tx"></p>
            <p>
              Lead time 10 days <MdInfoOutline />
            </p>
            <p>
              Shipping time 6-10 days <MdInfoOutline />
            </p>
            <span className="price-text"></span>
            <div className="button button--active">Login to purchase</div>
            <div className="button">Contact the supplier</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
