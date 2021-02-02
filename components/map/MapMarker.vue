<template>
  <l-marker :lat-lng="location.coords">
    <l-popup>
      <div class="w-64">
        <h3 class="text-xl font-bold -mb-4">
          {{ location.name }}
        </h3>
        <p class="text-gray-500 text-lg -mb-4">
          {{ location.address }}
        </p>
        <p v-if="location.notes" class="text-gray-400 italic">
          {{ location.notes }}
        </p>
      </div>
    </l-popup>
    <l-icon :icon-size="iconSize" icon-url="/images/markers/pantry-map-marker-green.png" />
  </l-marker>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
    },
  },

  data () {
    return {
      iconSize: [32, 40],
    }
  },
}
</script>
