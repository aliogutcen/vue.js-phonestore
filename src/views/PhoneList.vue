<template>
  <div class="p-4 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
    <div class="container mx-auto py-10">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-6"
      >
        <div
          v-for="phone in sortedPhones"
          :key="phone.serial"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden group relative"
        >
          <div
            v-if="phone.recommended"
            class="absolute top-2 left-2 z-10 bg-purple-500 text-white px-2 py-1 rounded-full"
          >
            Recommended
          </div>

          <div class="relative h-96 overflow-hidden">
            <img
              v-if="phone.image"
              :src="phone.image"
              alt="phone_image"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
            />
            <img
              v-else
              src="../assets/phone_035-removebg-preview.png"
              alt="default_image"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
            />
          </div>

          <div class="p-6 w-full">
            <h2
              class="text-2xl font-semibold mb-2 group-hover:text-purple-500 transition-colors"
            >
              {{ phone.name }}
            </h2>
            <div class="text-md mb-2">
              <span class="text-gray-700 font-semibold">Brand:</span>
              <span>{{ phone.brand }}</span>
            </div>

            <div class="text-md mb-2">
              <span class="text-gray-700 font-semibold">Model:</span>
              <span>{{ phone.model }}</span>
            </div>
            <div class="text-md mb-4">
              <span class="text-gray-700 font-semibold">Sale Price:</span>
              <span class="text-purple-500 font-bold"
                >${{ phone.sale_price }}</span
              >
            </div>
            <router-link
              :to="`/phone/${phone.serial}`"
              class="mt-2 bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white text-sm rounded p-3 w-full block text-center transition-colors"
            >
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPhones"]),
    sortedPhones() {
      return this.getPhones.sort(
        (a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0)
      );
    },
  },
};
</script>
