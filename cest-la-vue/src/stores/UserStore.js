import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  // Data
  state: () => ({
    newUsers: []
  }),

  // Computed
  getters: {
    shortUserList: (state) => {
      return state.newUsers.slice(0, 5)
    }
  },

  // Methods
  actions: {
    async fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json();
      this.newUsers = data;
    },
    newChangeFirstUser() {
      this.newUsers[0] = {
        id: 1,
        name: "Gwendal LE BRIS",
        username: "gwencode",
        email: "gwen@me.com",
        phone: "06 35 22 29 54"
      };
    },
    newChangeSecondUser() {
      this.newUsers[1] = {
        id: 2,
        name: "Corentin LE BRIS",
        username: "coco22",
        email: "coco@me.com",
        phone: "06 00 00 00 00"
      };
    },
  },
})
