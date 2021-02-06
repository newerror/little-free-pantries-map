<template>
  <div class="bg-pattern bg-green-100 min-h-screen h-full">
    <nuxt-link to="/" class="text-green-700 font-bold font-body px-1 py-0.5 bg-green-200 no-underline border-2 border-green-700 rounded absolute top-4 left-4 hover:text-green-500 hover:border-green-500 focus:text-green-500 focus:border-green-500 active:text-green-500 active:border-green-500 xs:top-6 xs:left-6">
      🢤 Return to Map
    </nuxt-link>
    <div class="w-full pt-20 px-6 sm:max-w-prose sm:mx-auto">
      <nuxt />
    </div>
  </div>
</template>

<style scoped>
.bg-pattern {
  background-color: #d1fae5;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.3'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
