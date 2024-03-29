import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: '',
    password: '',
  },

  signupForm: {
    email: '',
    password: '',
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async (e) => {
    const { loginForm } = authStore.getState();

    const res = await axios.post('/login', loginForm);

    set({
      loggedIn: true,
      signupForm: {
        email: '',
        password: '',
      },
    });

    console.log(res);
  },

  logout: async () => {
    try {
      await axios.get('/logout');
      set({ loggedIn: false });
    } catch (err) {
      console.log(err);
    }
  },

  checkAuth: async () => {
    try {
      await axios.get('/check-auth');
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  signup: async () => {
    const { signupForm } = authStore.getState();
    console.log(authStore.getState());

    const res = await axios.post('/signup', signupForm);

    console.log('testing', res);
  },
}));

export default authStore;