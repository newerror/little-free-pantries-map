<template>
  <div class="fixed bg-gray-700 w-full shadow-md z-top pb-1">
    <div class="flex justify-between items-center w-full max-w-screen-lg mx-auto">
      <div class="pl-2 md:pl-6">
        <nuxt-link to="/info" class="das-icon-btn block" title="About">
          <InfoCircleIcon class="das-svg-icon" />
        </nuxt-link>
      </div>
      <div class="flex flex-col items-center text-center">
        <p class="text-sm md:text-lg text-green-100 font-handwritten">
          Fairfield
        </p>
        <h1 class="text-lg md:text-3xl -mt-2 font-title text-green-600">
          Litte Free Pantries
        </h1>
      </div>
      <a href="https://facebook.com/groups/fairfieldiowalittlefreepantries" target="_blank">
        <div class="mr-2 md:mr-6 das-icon-btn">
          <FacebookLogo class="das-svg-icon" />
        </div>
      </a>
    </div>
  </div>
</template>
