<template>
    <div class="brook-icon-boxes-area ptb--100">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-sm-6" v-for="item in boxList" :key="item.id">
                    <div class="icon-box text-center no-border bg-transparant vibrate-style">
                        <div class="inner">
                            <div class="icon">
                                <i :class="item.icon"></i>
                            </div>
                            <div class="content">
                                <h5 class="heading heading-h5">{{ item.title }}</h5>
                                <p>{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                boxList: [
                    {
                        id: 1,
                        icon: "fa fa-book",
                        title: "Schedule",
                        text: "We have convenient scheduling options to book rides in seconds."
                    },
                    {
                        id: 2,
                        icon: "fa fa-user-circle",
                        title: "Coordinate",
                        text: "We provide with the right vehicle equipped with Wheelchair, Stretcher etc.. for your trip based on your needs."
                    },
                    {
                        id: 3,
                        icon: "fa fa-car",
                        title: "Ride",
                        text: "Our experienced and freindly staff will be at your assitance and make sure you have pleasant experience."
                    },
                    {
                        id: 4,
                        icon: "fa fa-check-circle",
                        title: "Review",
                        text: "We always solve the most important problems to have the biggest impact"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">

</style>