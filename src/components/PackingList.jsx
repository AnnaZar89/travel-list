import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onDeleteAll }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  // with slice method we take a copy of the array; if we take only sort method we risk to mutate the array
  //with localCompare method we sort items alphabetically
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  console.log(items);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {/* based on value in option we will calculate ordered list */}
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {/* we need to know what is the selected element; we need to transform it into controlled element; for that we need 3 steps: 1) create new piece of state */}
        {/* How we make the items sorted by criteria chosen? we will create new
          items which will be sorted by criteria; we are not going to manipulate
          the original items array; we will use again derived state because sorting an array can be computed based on initial array; we will not create new state */}
        <button onClick={onDeleteAll}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
