import {defineStore} from "pinia";

export let useRideServiceStore = defineStore('rideServiceStore', {
    state() {
        return {
            speed: 0
        }
    }
});
