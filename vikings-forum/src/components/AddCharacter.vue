<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    newCharacter: { name: "", description: "", viking: false },
    lastCharacter: "Pas de nouveau n°10 dans ma team !"
  }),
  methods: {
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

<h2>Last character arrived</h2>
<p>{{ lastCharacter }}</p>

</template>
