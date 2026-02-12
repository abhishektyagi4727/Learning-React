import React, { useState } from "react";
import Table from "./Table"; // Import the Table component

// Sample array of objects with 15 objects
const data = [
  { id: 1, name: "John Doe", age: 28, country: "USA" },
  { id: 2, name: "Jane Smith", age: 32, country: "Canada" },
  { id: 3, name: "Sara Lee", age: 25, country: "UK" },
  { id: 4, name: "Michael Scott", age: 45, country: "Germany" },
  { id: 5, name: "Tina Fey", age: 39, country: "Australia" },
  { id: 6, name: "Tom Hanks", age: 64, country: "USA" },
  { id: 7, name: "Emma Watson", age: 35, country: "UK" },
  { id: 8, name: "Chris Hemsworth", age: 40, country: "Australia" },
  { id: 9, name: "Robert Downey", age: 55, country: "USA" },
  { id: 10, name: "Scarlett Johansson", age: 36, country: "USA" },
  { id: 11, name: "Brad Pitt", age: 58, country: "USA" },
  { id: 12, name: "Angelina Jolie", age: 45, country: "USA" },
  { id: 13, name: "Will Smith", age: 53, country: "USA" },
  { id: 14, name: "Morgan Freeman", age: 84, country: "USA" },
  { id: 15, name: "Keanu Reeves", age: 56, country: "Canada" },
];

function TableData() {
  const [dataList, setDataList] = useState(data); // Store data in state

  // Function to handle edit - it can be expanded to actually edit data
  const handleEdit = (id) => {
    console.log("Edit item with ID:", id);
    // You can modify the logic to open a modal or update an item in the state
  };

  // Function to handle delete - delete an item by its id
  const handleDelete = (id) => {
    const updatedData = dataList.filter((item) => item.id !== id);
    setDataList(updatedData);
  };

  return (
    <div>
      <h1>User Data Table</h1>
      <Table data={dataList} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default TableData;
