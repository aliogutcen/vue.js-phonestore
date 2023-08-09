<template>
  <div class="p-4 bg-gradient-to-r from-blue-300 to-purple-300 min-h-screen">
    <div class="container mx-auto py-20 px-4 md:px-0">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="relative shadow-md rounded-lg overflow-hidden">
          <img
            :src="phone.image"
            alt="phone_image"
            class="w-full h-auto transition-transform duration-500 transform hover:scale-110"
          />
        </div>
        <div class="space-y-10">
          <h1 class="text-6xl font-bold text-gray-800 font-poppins">
            {{ phone.name }}
          </h1>

          <h2 class="text-4xl text-gray-700 mb-2 font-poppins">
            {{ phone.brand }} - {{ phone.model }}
          </h2>
          <p
            class="text-purple-700 font-extrabold text-5xl font-poppins bg-gray-200 p-2 rounded-md"
          >
            ${{ phone.sale_price }}
          </p>
          <button
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-10 rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div
        class="bg-white p-12 mt-20 rounded-lg shadow-md space-y-10 border border-gray-300"
      >
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4 font-poppins">
          Product Details
        </h2>
        <p class="text-gray-600 leading-relaxed text-xl font-poppins">
          Here you can include detailed information about the product. This can
          be a description of the product, its features, benefits, and any other
          relevant details that the customer might find useful.
        </p>
        <div>
          <h3 class="text-3xl font-semibold text-gray-700 mb-4 font-poppins">
            Technical Specifications
          </h3>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li class="text-xl font-poppins flex items-center">
              <span class="material-icons text-purple-500 mr-2">build</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              maxime quas! Totam maiores recusandae, consectetur magnam aperiam
              eveniet aut. Reprehenderit?
            </li>
            <li class="text-xl font-poppins flex items-center">
              <span class="material-icons text-purple-500 mr-2">memory</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              maxime quas! Totam maiores recusandae, consectetur magnam aperiam
              eveniet aut. Reprehenderit?
            </li>
            <li class="text-xl font-poppins flex items-center">
              <span class="material-icons text-purple-500 mr-2"
                >battery_std</span
              >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              maxime quas! Totam maiores recusandae, consectetur magnam aperiam
              eveniet aut. Reprehenderit?
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["phones"]),
    phone() {
      return (
        this.phones.find((p) => p.serial === this.$route.params.serial) || {}
      );
    },
  },
};
</script>
