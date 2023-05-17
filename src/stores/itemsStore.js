import { create } from 'zustand';
import axios from 'axios';

const itemsStore = create((set) => ({
  items: null,

  createForm: {
    name: '',
    location: '',
    amount: '',
  },

  updateForm: {
    _id: null,
    name: '',
    location: '',
    amount: '',
  },

  fetchItems: async () => {
    // Fetch items
    const res = await axios.get('/items');
    // Set items
    set({
      items: res.data.items,
    });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createItem: async (e) => {
    e.preventDefault();

    const { createForm, items } = itemsStore.getState();

    // Create Item
    const res = await axios.post('/items', createForm);

    set({
      items: [...items, res.data.item],
      createForm: { name: '', location: '', amount: '' },
    });
  },

  deleteItem: async (_id) => {
    const res = await axios.delete(`/items/${_id}`);

    const { items } = itemsStore.getState();

    console.log(res);
    // Update state
    const newItems = items.filter((item) => {
      return item._id !== _id;
    });
    set({ items: newItems });
  },

  handleUpdateItem: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, name, location, amount }) => {
    set({
      updateForm: {
        name,
        location,
        amount,
        _id,
      },
    });
  },

  updateItem: async (e) => {
    e.preventDefault();
    const {
      updateForm: { name, location, amount, _id },
      items,
    } = itemsStore.getState();

    // Send the update request
    const res = await axios.put(`/items/${_id}`, {
      name,
      location,
      amount,
    });

    // Update state
    const newItems = [...items];
    const itemIndex = items.findIndex((item) => {
      return item._id === _id;
    });

    newItems[itemIndex] = res.data.item;

    set({
      items: newItems,
      // Clear update form
      updateForm: {
        _id: null,
        name: '',
        location: '',
        amount: '',
      },
    });
  },
}));

export default itemsStore;
