import {defineStore} from "pinia";

export let useParameterStore = defineStore('parameterStore', {
    state() {
        return {
            context: null,
        }
    },
    getters: {
        isOnRide() {
            return true;
            // return this.context === 'onRide';
        },
        isOffRide() {
            return false;
            // return this.context === 'offRide';
        },
    }
});
