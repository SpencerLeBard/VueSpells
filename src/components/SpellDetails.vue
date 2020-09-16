<template>
  <div id="spell-details">
    {{spell}}
    {{spell.desc}}
    <br />
    <button>Add Spell</button>
    <button>Delete Spell</button>
  </div>
</template>

<script>
export default {
  name: "spell-details",
  computed: {
    spell() {
      return this.$store.state.spellDetails;
    },
  },
};
</script>

<style>
</style>