import React, { useState, useEffect } from "react";
import "./TaskTracker.css";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  serverTimestamp,
} from "firebase/database";

const TaskTracker = () => {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newItem, setNewItem] = useState({
    name: "",
    amount: "",
    price: "",
    timestamp: null, // initialize timestamp property to null
  });

  useEffect(() => {
    const db = getDatabase();
    const itemsRef = ref(db, "items");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemArray = Object.keys(data).map((itemId) => ({
          id: itemId,
          ...data[itemId],
        }));
        setItems(itemArray);
      }
    });
  }, []);

  const handleItemNameChange = (event) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      name: event.target.value,
    }));
  };

  const handleItemAmountChange = (event) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      amount: event.target.value,
    }));
  };

  const handleItemPriceChange = (event) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      price: event.target.value,
    }));
  };

  const handleAddItem = () => {
    const db = getDatabase();
    const itemRef = push(ref(db, "items"));
    set(itemRef, {
      ...newItem,
      timestamp: new Date().toLocaleString(), // set timestamp to current date and time
    });
    setNewItem({
      name: "",
      amount: "",
      price: "",
      timestamp: null,
    });
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setNewItem(items[index]);
  };

  const handleSaveItem = () => {
    const db = getDatabase();
    const itemRef = ref(db, "items/" + newItem.id);
    set(itemRef, {
      ...newItem,
      timestamp: new Date().toLocaleString(), // set timestamp to current date and time
    });
    setNewItem({
      name: "",
      amount: "",
      price: "",
      timestamp: null,
    });
    setEditingIndex(null);
  };

  const handleDeleteItem = (index) => {
    const db = getDatabase();
    const itemRef = ref(db, "items/" + items[index].id);
    set(itemRef, null);
  };

  return (
    <div className="task-tracker-container">
      <div className="input-fields-container">
        <h2>Add Item</h2>
        <div className="input-field">
          <label htmlFor="item-name">Item Name</label>
          <input
            type="text"
            id="item-name"
            value={newItem.name}
            onChange={handleItemNameChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="item-amount">Item Amount</label>
          <input
            type="number"
            id="item-amount"
            value={newItem.amount}
            onChange={handleItemAmountChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="item-price">Item Price</label>
          <input
            type="number"
            id="item-price"
            value={newItem.price}
            onChange={handleItemPriceChange}
          />
        </div>
        <button
          onClick={editingIndex !== null ? handleSaveItem : handleAddItem}
        >
          {editingIndex !== null ? "Save Item" : "Add Item"}
        </button>
      </div>
      <div className="table-container">
        <h2>Items List</h2>
        <div className="scrollable-table">
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleEditItem(index)}>Edit</button>
                    <button onClick={() => handleDeleteItem(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TaskTracker;
