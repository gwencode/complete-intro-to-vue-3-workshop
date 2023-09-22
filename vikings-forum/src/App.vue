<script>
import AddCharacter from './components/AddCharacter.vue';
import AllCharacters from './components/AllCharacters.vue';
import AllNames from './components/AllNames.vue';
import CharactersLayout from './components/CharactersLayout.vue';
import FavoritesCharacters from './components/FavoritesCharacters.vue';
import VikingsStatistics from './components/VikingsStatistics.vue';

export default {
  components: {
    AddCharacter,
    AllCharacters,
    AllNames,
    CharactersLayout,
    FavoritesCharacters,
    VikingsStatistics,
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
    favorites: []
  }),
  methods: {
    addFavorite(character) {
      this.favorites.push(character)
    },
    removeFavorite(character) {
      this.favorites = this.favorites.filter(favorite => favorite.name !== character.name)
    }
  }
}
</script>

<template>
  <h1 style="text-align: center;">Vikings</h1>

  <CharactersLayout>
    <template v-slot:title>Characters</template>
    <template v-slot:col-1>
      <AllNames :characters="characters"/>
      <!-- SAME AS : <AllNames v-bind:characters="characters"/> -->
    </template>
    <template v-slot:col-2>
      <FavoritesCharacters :favorites="favorites" @remove-favorite="removeFavorite"/>
    </template>
    <template v-slot:col-3>
      <AddCharacter :characters="characters"/>
    </template>
    <template v-slot:col-4>
      <VikingsStatistics :characters="characters"/>
    </template>
  </CharactersLayout>
  <AllCharacters :characters="characters" @add-favorite="addFavorite" />


</template>
