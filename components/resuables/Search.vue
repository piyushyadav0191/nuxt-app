<template>
  <div
    class="border-[1px] md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
  >
    <div class="flex flex-row items-center justify-between">
      <div class="text-sm font-semibold px-6">Anywhere</div>
      <div
        class="hidden sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center"
      >
        Any week
      </div>
      <div class="text-sm pl-6 pr-2 flex flex-row items-center gap-3">
        <div class="hidden sm:block">Add Guests</div>
        <div
          class="w-10 h-10 flex items-center justify-center bg-primary rounded-full"
        >
          <Icon name="oui:search" size="18" class="text-teal-400" />
        </div>
      </div>
    </div>
  </div>
</template>
