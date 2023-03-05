import { useEffect } from 'react';
import itemsStore from '../../stores/itemsStore';
import Items from '../../components/Items';
import UpdateForm from '../../components/UpdateForm';
import CreateForm from '../../components/CreateForm';

export default function ItemsPage() {
  const store = itemsStore();

  // UseEffect
  useEffect(() => {
    store.fetchItems();
  }, []);
  return (
    <div>
      <Items />
      <CreateForm />
      <UpdateForm />
    </div>
  );
}
