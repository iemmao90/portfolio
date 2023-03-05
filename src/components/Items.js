import itemsStore from '../stores/itemsStore';
import Item from './Item';

export default function Items() {
  const store = itemsStore();
  return (
    <div>
      <h2>Items</h2>
      {store.items &&
        store.items?.map((item) => {
          return <Item item={item} key={item._id} />;
        })}
    </div>
  );
}
