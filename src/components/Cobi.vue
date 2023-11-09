<script setup>
import {useMobileStore} from "@/stores/MobileStore";
import {useParameterStore} from "@/stores/ParameterStore";
import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";

let mobile = useMobileStore();
let parameters = useParameterStore();
let rideService = useRideServiceStore();
let tourService = useTourServiceStore();

COBI.init('token — can by anything right now');

COBI.mobile.location.subscribe(
    function (value) {
      mobile.location = value;
    }
);

COBI.rideService.speed.subscribe(
    function (value) {
      rideService.setCurrentSpeed(Number((value * 3.6).toFixed(1)))
    }
);

COBI.rideService.userPower.subscribe(
    function (value) {
      rideService.userPower = Number(value);
    }
);
COBI.rideService.cadence.subscribe(
    function (value) {
      rideService.cadence = Number(value);
    }
);

COBI.tourService.averageSpeed.subscribe(
    function (value) {
      tourService.setAverageSpeed(Number((value * 3.6).toFixed(1)));
    }
);

parameters.context = COBI.parameters.context()

</script>

<template>

</template>