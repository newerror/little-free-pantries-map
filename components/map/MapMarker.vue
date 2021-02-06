<template>
  <l-marker :lat-lng="location.coords">
    <l-popup>
      <div class="w-64 text-center font-body">
        <h3 class="text-xl font-bold">
          {{ location.name }}
        </h3>
        <div v-if="location.instructions" class="text-gray-400 italic font-bold text-piqeno mb-0.5">
          {{ location.instructions }}
        </div>
        <div class="text-gray-500 text-lg">
          {{ location.address }}
        </div>
        <div v-if="location.notes" class="text-gray-400 italic">
          {{ location.notes }}
        </div>
      </div>
    </l-popup>

    <l-icon v-if="location.pending" :icon-size="pendingIconSize" icon-url="/images/markers/coming-soon.png" />
    <l-icon v-else :icon-size="iconSize" icon-url="/images/markers/pantry-map-marker-green.png" />
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
      pendingIconSize: [81, 49],
    }
  },
}
</script>
