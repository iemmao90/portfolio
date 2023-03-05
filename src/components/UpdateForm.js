import itemsStore from '../stores/itemsStore';

export default function UpdateForm() {
  const store = itemsStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={store.updateItem}>
        <label>Name</label>
        <input
          onChange={store.handleUpdateItem}
          value={store.updateForm.name}
          name="name"
        ></input>
        <label>Location</label>
        <input
          onChange={store.handleUpdateItem}
          value={store.updateForm.location}
          name="location"
        ></input>
        <label>Amount</label>
        <input
          onChange={store.handleUpdateItem}
          value={store.updateForm.amount}
          name="amount"
        ></input>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}
