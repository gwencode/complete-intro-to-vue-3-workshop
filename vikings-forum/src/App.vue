<script>
import VikingsStatistics from './components/VikingsStatistics.vue';
import AllNames from './components/AllNames.vue';

export default {
  components: {
    VikingsStatistics,
    AllNames
  },
  data: () => ({
    characters: [
      { name: "Ragnar Lothbrok", description: "Viking farmer who rose to fame by successful raids into England and eventually became a Scandinavian king.", viking: true },
      { name: "Lagertha", description: "Shield-maiden and Ragnar's first wife.", viking: true },
      { name: "Bjorn Ironside", description: "Son of Ragnar and Lagertha. He is a fierce Viking warrior.", viking: true },
      { name: "Floki", description: "Viking shipbuilder and heathen priest.", viking: true },
      { name: "Athelstan", description: "Monk captured by Ragnar on his first raid in England. He becomes Ragnar's friend and translator.", viking: false },
      { name: "King Ecbert", description: "King of Wessex and Mercia. He is a cunning and ruthless politician.", viking: false },
      { name: "King Aelle", description: "King of Northumbria. He is a devout Christian and a fierce enemy of Ragnar.", viking: false },
      { name: "King Alfred", description: "King of Wessex. He is a devout Christian and a fierce enemy of the Vikings.", viking: false },
      { name: "Ivar", description: "Son of Ragnar", viking: true },
      { name: "Ubbe", description: "Son of Ragnar", viking: true },
      { name: "Hvitserk", description: "Son of Ragnar", viking: true },
      { name: "Sigurd", description: "Son of Ragnar", viking: true },
      ],
    favorites: [],
    newCharacter: { name: "", description: "", viking: false },
    lastCharacter: "Pas de nouveau n°10 dans ma team !"
  }),
  methods: {
    addFavorite(character) {
      this.favorites.push(character)
    },
    addCharacter() {
      if (this.newCharacter.name.trim() !== '' && this.newCharacter.description.trim() !== '') {
        this.characters.push(this.newCharacter);
        this.newCharacter = { name: "", description: "", viking: false };
        this.lastCharacter = `${this.characters[this.characters.length - 1].name} vient d'arriver !`;
      } else {
        alert("Nom et description doivent être renseignées.");
      }
    }
  }
}
</script>

<template>
  <h1>Vikings</h1>
  <AllNames v-bind:characters="characters"/>
  <!-- SAME AS : <AllNames :characters="characters"/> -->

  <h2>Favorites characters</h2>
  <p v-if="favorites.length === 0 "> These is no favorites</p>
  <ul v-else>
    <li v-for="(favorite, index) in favorites" :key="`favorite-${index}`"> {{ favorite.name}} </li>
  </ul>

  <h2>Add a new character</h2>
  <div>
    <label for="nameCharacter">Nom:</label>
    <input type="text" v-model="newCharacter.name">
    <label for="descriptionCharacter">Description:</label>
    <input type="text" v-model="newCharacter.description">
    <label for="vikingCharacter">Viking:</label>
    <input type="checkbox" v-model="newCharacter.viking">
    <button @click="addCharacter">Add</button>
  </div>

  <VikingsStatistics :characters="characters"/>

  <h2>Last character arrived</h2>
  <p>{{ lastCharacter }}</p>

  <h2>All characters</h2>

  <div v-for="(character, index) in characters" :key="`character-${index}`">
    <h3 v-if="character.viking" style="color: red"> {{ character.name }}</h3>
    <h3 v-else style="color: blue"> {{ character.name }}</h3>
    <p> {{ character.description }} </p>
    <button @click="addFavorite(character)">Add to favorite</button>
  </div>
</template>
