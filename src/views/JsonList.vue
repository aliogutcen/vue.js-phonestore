<template>
  <div>
    <pre>{{ phoneListAsJSON }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPhones"]),

    phoneListAsJSON() {
      return JSON.stringify(this.getPhones, null, 2);
    },
  },
};
</script>
