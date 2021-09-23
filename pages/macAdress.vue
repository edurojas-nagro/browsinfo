<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <x-address @change="selectAddress"></x-address>
    <div id="address" v-text="selectedAddress"></div>
  </div>
</template>
 
<script>
import xAddress from 'vue-address'
 
export default {
  name: 'app',
  components: {
    xAddress
  },
  data: () => {
    return {
        selectedAddress: ''
    }
  },
  methods: {
    selectAddress(address) {
        this.selectedAddress = `${address.province}${address.city}${address.detail}`
    }
  }
}
</script>