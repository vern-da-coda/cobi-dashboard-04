import {defineStore} from "pinia";

export let useRideServiceStore = defineStore('rideServiceStore', {
    state() {
        return {
            speed: 0,
            maxSpeed: null,
            userPower: 0,
            cadence: 0
        }
    },
    actions: {
        setSpeed(value) {
            this.speed = value;
            this.setMaxSpeed();
        },
        setMaxSpeed() {
            if (this.speed > this.maxSpeed) {
                this.maxSpeed = this.speed;
                localStorage.setItem('maxSpeed', JSON.stringify(this.maxSpeed));
            }
        },
    },
    getters: {
        getMaxSpeed() {
            if (this.maxSpeed === null) {
                this.maxSpeed = JSON.parse(localStorage.getItem('maxSpeed'));
            }
            return this.maxSpeed;
        },
    },
});
