import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "./ProductService";

export default function SerivceItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-[50%] bg-white h-[400px] mx-auto mt-16 shadow-lg  border-[3px] border-gray-50 flex items-center content-center justify-center mb-10">
      <DataTable
        value={products}
        stripedRows
        tableStyle={{ minWidth: "40rem" }}
      >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
}
