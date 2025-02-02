import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  let [menuItems, setMenuItems] = useState([
    "Albert Eggstein",
    "Attila the Hen",
    "Dixie Chick",
    "Gregory Peck",
    "Mary Poopins"
  ]);

  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");

  // Adds a new item to the menu list
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((prevMenuItems) => [...prevMenuItems, newMenuItem]);
      setNewMenuItem(""); // Clears the input field after adding
    }
  }, [newMenuItem]);

  return (
    <div>
      {/* Renders the menu list with filtering */}
      <ul>
        {menuItems
          .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>

      {/* Input field to add a new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />

      {/* Button to add a new item */}
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />

      {/* Input field to filter menu items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  );
}
