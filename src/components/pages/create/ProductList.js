import React, { useState, memo } from 'react';

// Components
import ProductListItem from './ProductListItem';
import ProductAddItem from './ProductAddItem';

// Styled Coponents
import { Button } from '../../styledComponents/shared/Button';
import { InvoiceTable } from '../../styledComponents/newInvoice/InvoiceTable';

// Custom Toggle Hook
import useToggle from '../../../hooks/useToggle';
import TotalAmount from './TotalAmount';

// Component
function ProductList(props) {
  const [items, setItems] = useState([]);
  const [showAddItemForm, toggleAddItemForm] = useToggle(true);

  // ADD, DELETE, EDIT
  const handleAdd = newItem => {
    const newItems = [
      ...items,
      {
        ...newItem,
        rate: parseFloat(newItem.rate),
        amount: parseFloat(newItem.amount),
        disc: parseFloat(newItem.disc),
        qty: parseFloat(newItem.qty)
      }
    ];
    setItems(newItems);
    toggleAddItemForm();
  };

  const handleDelete = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const handleEdit = (newItem, id) => {
    console.log(newItem);
    const newItems = items.map(item => {
      if (item.id === id)
        return {
          ...newItem,
          rate: parseFloat(newItem.rate),
          amount: parseFloat(newItem.amount),
          disc: parseFloat(newItem.disc),
          qty: parseFloat(newItem.qty)
        };
      return item;
    });
    setItems(newItems);
    console.log(newItems);
  };

  //Handle UPstreme Data
  const handleItemsData = data => {
    const itemsObj = { items: items, ...data };
    console.log(itemsObj);
    props.handleInvoiceSubmit(itemsObj);
  };

  return (
    <InvoiceTable>
      <h2>Item Details</h2>

      {items.map(item => (
        <ProductListItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          currency={props.invoiceMeta.currency}
          handleEdit={handleEdit}
        />
      ))}
      {showAddItemForm && (
        <ProductAddItem
          currency={props.invoiceMeta.currency}
          handleAdd={handleAdd}
        ></ProductAddItem>
      )}
      <Button onClick={toggleAddItemForm} className="addBtn">
        {showAddItemForm ? 'CANCEL' : 'ADD ITEM'}
      </Button>
      {items.length !== 0 && (
        <TotalAmount
          handleItemsData={handleItemsData}
          items={items}
          invoiceMeta={props.invoiceMeta}
        />
      )}
    </InvoiceTable>
  );
}

export default memo(ProductList);
