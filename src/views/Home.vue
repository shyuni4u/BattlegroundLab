<template>
  <div class="home">
    <Present/>
  </div>
</template>

<script>
// @ is an alias to /src
import Present from "@/components/Present.vue";

export default {
  name: "home",
  components: {
    Present
  }
};
</script>
