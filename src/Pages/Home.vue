<template>
  <div id="home" class="container-fluid">
    <div class="row">
      <div class="col-4 bg-dark">
        <api-spells
          v-for="(apispell, index) in apiSpells"
          :key="apispell.name"
          :index="index"
          :spellprop="apispell"
        />
      </div>
      <div class="col-4">
        <spell-details />
      </div>
    </div>
  </div>
</template>

<script>
import ApiSpells from "../components/ApiSpells.vue";
import SpellDetails from "../components/SpellDetails.vue";

export default {
  mounted() {
    this.$store.dispatch("spellSearch");
  },
  data() {
    return {};
  },
  methods: {},

  computed: {
    apiSpells() {
      return this.$store.state.spellResults;
    },
  },
  components: {
    ApiSpells,
    SpellDetails,
  },
};
</script>

<style scoped>
</style>