import itemsStore from '../stores/itemsStore';

export default function Item({ item }) {
  const store = itemsStore((store) => {
    return { deleteItem: store.deleteItem, toggleUpdate: store.toggleUpdate };
  });

  return (
    <ul key={item._id} className="item-container">
      <li>{item?.name}</li>
      <li>{item?.location}</li>
      <li>{item?.amount}</li>
      <button onClick={() => store.deleteItem(item._id)}>Delete Item</button>
      <button onClick={() => store.toggleUpdate(item)}>Update Item</button>
    </ul>
  );
}
