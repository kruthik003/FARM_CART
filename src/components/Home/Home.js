import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1112233456"
            title="Kalitemu Super"
            price={1000}
            rating={1}
            image="https://drive.google.com/uc?id=1YAWjnP64nnRO54MU8ypgzcBBgEXUo3Qh"
          />
          <Product
            id="223344567"
            title="Buwung Lepang"
            price={4000}
            rating={3}
            image="https://drive.google.com/uc?id=1Oz7ZBv6UKxrlDst8y6ChKIoJr3mzF43V"
          />
        </div>

        <div className="home__row">
          <Product
            id="33445678"
            title="Pejaten XL"
            price={5000}
            rating={2}
            image="https://drive.google.com/uc?id=12wbr82MVukJ135CPWPhlxrgKExZ8mzoW"
          />
          <Product
            id="4455667789"
            title="Buwung Bintang L"
            price={6000}
            rating={3}
            image="https://drive.google.com/uc?id=1ZT6dTGFdwj5h4XCz8NtHGPEDGuvglvnB"
          />
          <Product
            id="5566777889"
            title="Buwung Bintang L"
            price={6000}
            rating={1}
            image="https://drive.google.com/uc?id=1gGRxCG-OGikVm4bdwqZpQoiFIFI2qv4a"
          />
        </div>

        <div className="home__row">
          <Product
            id="66779990"
            title="Kali Temu Super L"
            price={6000}
            rating={3}
            image="https://drive.google.com/uc?id=1MR-yMV5D89d1pr0oIraJWSP4MEqN1BNn"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
