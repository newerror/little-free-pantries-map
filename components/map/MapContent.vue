<template>
  <div id="map-wrap" class="h-full">
    <client-only>
      <l-map
        :zoom="14"
        :center="[41.006630,-91.965050]"
        :options="{ zoomControl: false }"
        :max-bounds="bounds"
        class="relative"
      >
        <!-- <l-control position="bottomleft" class="ml-4 mb-8">
          <nuxt-link to="/info" class="cursor rounded bg-black bg-opacity-20 text-white">
            <info-circle-icon />
          </nuxt-link>
        </l-control> -->
        <l-control-attribution position="bottomleft" prefix="👨‍💻 by David Soth" />
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <map-marker
          v-for="location in locations"
          :key="location.address"
          :location="location"
        />
        <l-control-zoom position="bottomright" />
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: false,
      bounds: [
        [40.92181441237853, -92.16166043260344],
        [41.06692773019345, -91.73937344529875],
      ],
      locations: [
        {
          name: 'Home',
          address: '403 S. Main',
          coords: [41.003380, -91.963700],
          notes: 'We can add as many of these tokens as we\'d like. Let me know.',
        },
        {
          name: 'MIU Campus',
          address: '1112 Granville Avenue',
          coords: [41.022090, -91.965390],
        },
        {
          name: '',
          address: '605 East Madison Avenue',
          coords: [41.003050, -91.955060],
        },
        {
          name: '',
          address: '401 West Lowe',
          coords: [41.012500, -91.969100],
        },
        {
          name: '',
          address: '1300 South Second Street',
          coords: [40.995720, -91.965200],
        },
        {
          name: '',
          address: '500 East Burlington Avenue',
          coords: [41.006580, -91.956930],
        },
        {
          name: 'SEIDA',
          address: '2200 West Jefferson',
          coords: [41.003625, -91.986870],
        },
        {
          name: '',
          address: 'Gear Avenue between 10th and 12th Streets',
          coords: [41.017470, -91.976858],
        },
      ],
    }
  },
}
</script>
