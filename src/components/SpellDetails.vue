<template>
  <div id="spell-details">
    {{spell.name}}
    <br />
    {{spell.desc}}
    <br />
    <button></button>
    <button></button>
  </div>
</template>

<script>
export default {
  name: "spell-details",
  data() {
    return {};
  },
  computed: {
    spell() {
      return this.$store.state.spellDetails;
    },
  },
};
</script>

<style>
</style>