<template>
  <div class="col-4" id="apispells">
    <div class="card" @click="setActive()">
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
      this.$store.dispatch("setActiveSpell", this.spellprop);
    },
  },
  props: ["spellprop"],
};
</script>

<style scoped>
</style>

