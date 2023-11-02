import {defineStore} from "pinia";

export let useMobileStore = defineStore('mobileStore', {
    state() {
        return {
            location: null,
            heading: null,
        }
    }
});
