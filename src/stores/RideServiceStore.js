import {defineStore} from "pinia";

export let useRideServiceStore = defineStore('rideServiceStore', {
    state() {
        return {
            currentSpeed: 0,
            maxSpeed: 0,
            userPower: 0,
            currentCadence: 0,
            maxCadence: 0,
            averageCadence: 0,
        }
    },
    actions: {
        setCurrentSpeed(value) {
            this.currentSpeed = value;
            this.setMaxSpeed();
        },
        setMaxSpeed() {
            if (this.currentSpeed > this.maxSpeed) {
                this.maxSpeed = this.currentSpeed;
                localStorage.setItem('maxSpeed', JSON.stringify(this.maxSpeed));
            }
        },
        setCurrentCadence(value) {
            this.currentCadence = value;
            this.setMaxCadence();
        },
        setMaxCadence() {
            if (this.currentCadence > this.maxCadence) {
                this.maxCadence = this.currentCadence;
                localStorage.setItem('maxCadence', JSON.stringify(this.maxCadence));
            }
        }
    },
    getters: {
        getMaxSpeed() {
            if (this.maxSpeed === 0) {
                this.maxSpeed = JSON.parse(localStorage.getItem('maxSpeed'));
            }
            return this.maxSpeed;
        },
        getMaxCadence() {
            if (this.maxCadence === 0) {
                this.maxCadence = JSON.parse(localStorage.getItem('maxCadence'));
            }
            return this.maxCadence;
        },
    },
});
