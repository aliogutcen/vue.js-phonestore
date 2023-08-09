<template>
  <div class="p-8 bg-gradient-to-r from-blue-100 to-purple-100 h-full">
    <form
      @submit.prevent="submitForm"
      class="flex flex-col md:flex-row gap-8 h-full justify-start"
    >
      <div
        class="w-full md:w-1/2 flex flex-col items-center justify-center relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <img
          v-if="imagePreview"
          :src="imagePreview"
          alt="phone_image"
          class="w-[80%] h-[80%] object-cover rounded-lg"
        />
        <div
          v-if="!imagePreview"
          @click="openFileInput"
          class="text-cente w-full"
        >
          <svg
            class="w-20 h-20 mb-4 sm:w-full sm:h-full text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <p class="text-gray-400 text-lg text-center font-semibold">
            Upload Image
          </p>
        </div>
        <input
          type="file"
          class="hidden"
          ref="fileInput"
          @change="previewImage"
        />
      </div>
      <div class="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
        <div class="mb-3 flex items-center self-start">
          <label class="text-gray-700 mr-3 font-semibold justify-start"
            >Recommended</label
          >
          <input
            type="checkbox"
            v-model="newPhone.recommended"
            class="w-5 h-5 rounded"
          />
        </div>
        <div class="mb-3">
          <label class="block text-gray-700 mb-2 font-semibold">Brand</label>
          <div class="relative">
            <select
              v-model="newPhone.brand"
              class="w-full p-2 border rounded-xl appearance-none"
            >
              <option value="Apple">Apple</option>
            </select>
            <div
              class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            ></div>
          </div>
        </div>

        <div class="mb-3">
          <label class="block text-gray-700 mb-2 font-semibold">Name</label>
          <input v-model="newPhone.name" class="w-full p-2 border rounded-xl" />
        </div>

        <div class="mb-3">
          <label class="block text-gray-700 mb-2 font-semibold">Model</label>
          <select v-model="newPhone.model" class="w-full p-2 border rounded-xl">
            <option value="128gb-black">128gb black</option>
            <option value="128gb-blue">128gb blue</option>
            <option value="256gb-black">256gb black</option>
            <option value="256gb-blue">256gb blue</option>
            <option value="512gb-black">512gb black</option>
            <option value="512gb-blue">512gb blue</option>
            <option value="512gb-white">512gb white</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="block text-gray-700 mb-2 font-semibold">Serial</label>
          <input
            v-model="newPhone.serial"
            class="w-full p-2 border rounded-xl"
          />
        </div>

        <div class="mb-3">
          <label class="block text-gray-700 mb-2 font-semibold"
            >Cost Price</label
          >
          <input
            type="number"
            v-model="newPhone.cost_price"
            class="w-full p-2 border rounded-xl"
            @input="validatePositiveValue('cost_price')"
          />
        </div>

        <div class="mb-3">
          <label class="block text-gray-700 mb-2 font-semibold"
            >Commission</label
          >
          <input
            type="number"
            step="0.01"
            v-model="newPhone.commission"
            class="w-full p-2 border rounded-xl"
            @input="validatePositiveValue('commission')"
          />
        </div>

        <div class="mb-3">
          <label class="block text-gray-700 mb-2 font-semibold"
            >Sale Price</label
          >
          <input
            type="number"
            v-model="newPhone.sale_price"
            class="w-full p-2 border rounded-xl"
          />
        </div>

        <button
          type="submit"
          class="bg-purple-500 text-white p-2 w-full rounded-xl hover:bg-purple-600 focus:outline-none focus:bg-purple-700 transition-colors font-semibold"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newPhone: {
        brand: "",
        name: "",
        model: "",
        serial: "",
        cost_price: null,
        commission: null,
        sale_price: null,
        recommended: false,
      },
      imagePreview: null,
    };
  },
  methods: {
    ...mapActions(["addPhone"]),

    openFileInput() {
      this.$refs.fileInput.click();
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    submitForm() {
      const isModelExists = this.getPhones.some(
        (phone) => phone.model === this.newPhone.model
      );
      const isSerialExists = this.getPhones.some(
        (phone) => phone.serial === this.newPhone.serial
      );

      if (isModelExists) {
        alert("A phone with this model has already been added!");
        return;
      }
      if (isSerialExists) {
        alert("A phone with this serial number has already been added!");
      }
      this.addPhone({ ...this.newPhone, image: this.imagePreview });
      this.resetForm();
    },
    validatePositiveValue(field) {
      if (this.newPhone[field] < 0) {
        this.newPhone[field] = 0;
        alert(`${field} can't be negative!`);
      }
    },

    resetForm() {
      this.newPhone = {
        brand: "",
        name: "",
        model: "",
        serial: "",
        cost_price: null,
        commission: null,
        sale_price: null,
        recommended: false,
      };
      this.imagePreview = null;
    },
  },
  computed: {
    ...mapGetters(["getPhones"]),
    calculatedSalePrice() {
      return this.newPhone.cost_price + this.newPhone.commission;
    },
  },
  watch: {
    calculatedSalePrice(newVal) {
      this.newPhone.sale_price = newVal;
    },
    "newPhone.sale_price"() {
      if (this.newPhone.sale_price !== this.calculatedSalePrice) {
        this.$options.watch.calculatedSalePrice.call(
          this,
          this.newPhone.sale_price
        );
      }
    },
  },
};
</script>
