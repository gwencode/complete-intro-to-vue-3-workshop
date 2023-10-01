import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  // Data
  state: () => ({
    userList: []
  }),

  // Computed
  getters: {
    shortUserList: (state) => {
      return state.userList.slice(0, 5)
    }
  },

  // Methods
  actions: {
    async fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      this.userList = response;
    },
    newChangeFirstUser() {
      this.userList[0] = {
        id: 1,
        name: "Gwendal LE BRIS",
        username: "gwencode",
        email: "gwen@me.com",
        phone: "06 35 22 29 54"
      };
    },
    newChangeSecondUser() {
      this.userList[1] = {
        id: 2,
        name: "Corentin LE BRIS",
        username: "coco22",
        email: "coco@me.com",
        phone: "06 00 00 00 00"
      };
    },
  },
})
