<template>
  <div class="fixed bg-gray-700 w-full shadow-md z-top pb-1">
    <div class="flex justify-between items-center w-full">
      <div class="pl-6">
        <nuxt-link to="/info" class="font-handwritten text-green-600 px-2 py-1 border-2 border-transparent rounded-md hover:text-green-200 focus:text-green-200 hover:border-green-200 focus:border-green-200">
          About
        </nuxt-link>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-lg text-green-100 font-handwritten">
          Fairfield
        </p>
        <h1 class="text-3xl -mt-2 font-title text-green-600">
          Litte Free Pantries
        </h1>
      </div>
      <a href="https://facebook.com" target="_blank" class="">
        <div class="mr-6 font-bold text-green-600 border-2 border-green-600 rounded-md px-2 py-1 hover:text-green-200 hover:border-green-200 focus:text-green-200 focus:border-green-200 cursor-pointer">
          <FacebookLogo class="fill-current h-5 inline-block" />
        </div>
      </a>
    </div>
  </div>
</template>
