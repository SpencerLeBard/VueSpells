<template>
  <div id="spell-details">
    <div class="card" v-if="spellprop.name">
      <div class="card-body">
        <h5 class="card-title">{{spellprop.name}}</h5>
        <button>Add to Sandbox</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spell-details",
  data() {
    return {};
  },
  computed: {
    setActiveSpell() {
      return this.$store.state.activeSpell;
    },
  },
};
</script>

<style scoped>
</style>
