<template>
  <div class="col-4" id="apispells">
    <div class="card" @click="setActiveSpell()">
      <p>{{spellprop.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setActiveSpell() {
      this.$store.dispatch("setSpellDetails", this.spellprop.index);
    },
  },
  props: ["spellprop"],
};
</script>

<style scoped>
</style>

