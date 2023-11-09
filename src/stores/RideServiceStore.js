import {defineStore} from "pinia";

export let useRideServiceStore = defineStore('rideServiceStore', {
    state() {
        return {
            currentSpeed: 0,
            maxSpeed: 0,
            userPower: 0,
            cadence: 0
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
    },
    getters: {
        getMaxSpeed() {
            if (this.maxSpeed === 0) {
                this.maxSpeed = JSON.parse(localStorage.getItem('maxSpeed'));
            }
            return this.maxSpeed;
        },
    },
});
