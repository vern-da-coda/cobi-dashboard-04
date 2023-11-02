import {defineStore} from "pinia";

export let useParameterStore = defineStore('parameterStore', {
    state() {
        return {
            context: null,
        }
    },
    getters: {
        isOnRide() {
            return this.context === 'onRide';
        },
        isOffRide() {
            return this.context === 'offRide';
        },
    }
});
