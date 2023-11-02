import {defineStore} from "pinia";

export let useTourServiceStore = defineStore('tourServiceStore', {
    state() {
        return {
            averageSpeed: 0
        }
    }
});
