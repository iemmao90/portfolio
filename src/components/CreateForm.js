import itemsStore from '../stores/itemsStore';

export default function CreateForm() {
  const store = itemsStore();
  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={store.createItem}>
        <label>Name</label>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.name}
          name="name"
        ></input>
        <label>Location</label>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.location}
          name="location"
        ></input>
        <label>Amount</label>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.amount}
          name="amount"
        ></input>
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}
