import React, { useState } from "react";
import EachProduct from "../EachProduct/EachProduct";
import "./Products.css";

export default function Products() {
  let [isActive, setIsActive] = useState(1);
  let filterProductFunc = (active) => {
    setIsActive(active);
  };
  return (
    <div>
      <div className="productsFilter_wrapper">
        <button
          onClick={() => filterProductFunc(1)}
          id={isActive == 1 ? "productsFilter_btn" : ""}
        >
          Hammasi
        </button>
        <button
          onClick={() => filterProductFunc(2)}
          id={isActive == 2 ? "productsFilter_btn" : ""}
        >
          Chegirmadagilar
        </button>
        <button
          onClick={() => filterProductFunc(3)}
          id={isActive == 3 ? "productsFilter_btn" : ""}
        >
          Eng qizg'inlari
        </button>
        <button
          onClick={() => filterProductFunc(4)}
          id={isActive == 4 ? "productsFilter_btn" : ""}
        >
          Eng yangilar
        </button>
      </div>

      <div className="container">
        <div className="productFilter_products">
          <EachProduct />
          <EachProduct />
          <EachProduct />
          <EachProduct />
          <EachProduct />
          <EachProduct />
        </div>
      </div>
    </div>
  );
}
