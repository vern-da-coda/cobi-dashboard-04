import {defineStore} from "pinia";

export let useTourServiceStore = defineStore('tourServiceStore', {
    state() {
        return {
            averageSpeed: null,
            averageCadence: null,
            averageCadenceList: []
        }
    },
    actions: {
        setAverageSpeed(value) {
            this.averageSpeed = value;

            localStorage.setItem('averageSpeed', JSON.stringify(this.averageSpeed));
        },
        setAverageCadence(value) {
            const maxCadenceValues = 30;
            this.averageCadenceList.push(value);

            if (this.averageCadenceList.length > maxCadenceValues) {
                this.averageCadenceList = this.averageCadenceList.slice(maxCadenceValues * (-1));

                let sum = this.averageCadenceList.reduce(
                    function add(accumulator, a) {
                        return accumulator + a;
                    }, 0);

                this.averageCadence = Math.round(sum / this.averageCadenceList.length)
            }

            localStorage.setItem('averageCadence', JSON.stringify(this.averageCadence));
        },
    },
    getters: {
        getAverageSpeed() {
            if (this.averageSpeed === null) {
                this.averageSpeed = JSON.parse(localStorage.getItem('averageSpeed')) || 0;
            }
            return this.averageSpeed;
        },
        getAverageCadence() {
            if (this.averageCadence === null) {
                this.averageCadence = JSON.parse(localStorage.getItem('averageCadence')) || 0;
            }
            return this.averageCadence;
        },
    },
});
