import { users } from './useUserStore';

export const changeFirstUser = () => {
  users.value[0] = {
    id: 1,
    name: "Gwendal LE BRIS",
    username: "gwencode",
    email: "gwen@me.com",
    phone: "06 35 22 29 54"
  };
}

export const changeSecondUser = () => {
  users.value[1] = {
  id: 2,
  name: "Corentin LE BRIS",
  username: "coco22",
  email: "coco@me.com",
  phone: "06 00 00 00 00"
  };
}

// export const login = (email) => {
//   // Parcourir l'array users pour trouver l'utilisateur avec l'email donné
//   for (const user of users.value) {
//     if (user.email === email) {
//       console.log(user)
//       return user
//     }
//   }

//   // Si aucun utilisateur correspondant n'est trouvé, renvoyer null
//   return null;
// }
