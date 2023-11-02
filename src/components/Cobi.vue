<script setup>
import {useRideServiceStore} from "@/stores/RideServiceStore";
import {useTourServiceStore} from "@/stores/TourServiceStore";

let rideService = useRideServiceStore();
let tourService = useTourServiceStore()

COBI.init('token — can by anything right now');

COBI.rideService.speed.subscribe(
    function (value) {
      rideService.speed = Number((value * 3.6).toFixed(1));
    }
);

COBI.tourService.averageSpeed.subscribe(
    function (value) {
      tourService.averageSpeed = Number((value * 3.6).toFixed(1));
    }
);
</script>