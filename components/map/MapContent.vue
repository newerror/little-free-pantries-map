<template>
  <div id="map-wrap" class="h-full">
    <client-only>
      <l-map
        :zoom="14"
        :center="[41.006630,-91.965050]"
        :options="{ zoomControl: false }"
        :max-bounds="bounds"
      >
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
      bounds: [
        [40.92181441237853, -92.16166043260344],
        [41.06692773019345, -91.73937344529875],
      ],
      locations: [
        {
          name: 'MIU Campus',
          instructions: 'South of Golden Dome Market (Off the Street)',
          address: '1112 Granville Avenue',
          coords: [41.023400, -91.963700],
        },
        {
          name: 'Madison Ave',
          address: '605 East Madison Avenue',
          coords: [41.003056, -91.955501],
        },
        {
          name: 'At \'Big Blue\'',
          address: '401 West Lowe',
          coords: [41.012400, -91.969275],
        },
        {
          name: 'Iowa Ave',
          instructions: 'On Iowa Ave, Just West of Second St',
          address: '1300 South Second Street',
          coords: [40.996125, -91.965350],
        },
        {
          name: 'Burlington Ave',
          address: '500 East Burlington Avenue',
          coords: [41.006580, -91.956930],
        },
        {
          name: 'SIEDA',
          address: '2200 West Jefferson',
          coords: [41.003625, -91.986870],
        },
        {
          name: 'Gear Ave',
          instructions: 'Between 10th and 12th Streets (South Side of the Street)',
          address: 'Gear Avenue between 10th and 12th Streets',
          coords: [41.017400, -91.976858],
        },
        {
          name: 'Buchanan Ave',
          pending: true,
          instructions: 'Coming Soon...',
          address: '401 East Buchanan Avenue',
          coords: [40.993824, -91.958076],
        },
        {
          name: 'Oakwood Drive',
          pending: true,
          instructions: 'Coming Soon...',
          address: '1001 Oakwood Drive',
          coords: [40.996570, -91.979560],
        },
      ],
    }
  },
}
</script>
