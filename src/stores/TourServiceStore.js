import {defineStore} from "pinia";

export let useTourServiceStore = defineStore('tourServiceStore', {
    state() {
        return {
            averageSpeed: null
        }
    },
    actions: {
        setAverageSpeed(value) {
            this.averageSpeed = value;

            localStorage.setItem('averageSpeed', JSON.stringify(this.averageSpeed));
        },
    },
    getters: {
        getAverageSpeed() {
            if(this.averageSpeed === null)
            {
                this.averageSpeed = JSON.parse(localStorage.getItem('averageSpeed'));
            }
            return this.averageSpeed;
        },
    },
});
