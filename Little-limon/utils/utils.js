import { useRef, useEffect } from 'react';
export function getSectionListData(data) {
  const groupedItems = data.reduce((acc, item) => {
    const { category, title, price ,pic } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ name: title, price: `$${price}.00` ,picture:pic});
    return acc;
  }, {});
  
  // Map grouped items into the desired format
  const menuItemsToDisplay = Object.entries(groupedItems).map(([title, data]) => ({
    title,
    data
  }));
  return menuItemsToDisplay
}


