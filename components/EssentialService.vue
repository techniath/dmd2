<template>
    <div class="service-area bg_color--5 ptb--150 ptb-md--80 ptb-sm--60">
        <div class="container">
            <div class="row align-content-center">
                <div class="col-lg-6 col-12">
                    <div class="bk-title--default text-left">
                        <h5 class="heading-13 theme-color text-uppercase fw-500">{{essentialService.subHeading}}</h5>
                        <div class="bkseparator--30"></div>
                        <h3 class="heading-40 fw-200" v-html="essentialService.heading">{{essentialService.heading}}</h3>
                    </div>
                </div>
                <div class="col-lg-6 col-12 mt_md--30 mt_sm--30">
                    <div class="modern-service-content wow move-up">
                        <p>{{essentialService.serviceContent}}</p>
                    </div>
                </div>
            </div>
            <div class="row mt--70 mt_md--20 mt_sm--10">
                <div class="col-xl-4 col-md-6 mt--30" v-for="service in essentialService.services" :key="service.id">
                    <div class="single-svg-icon-box">
                        <div class="grid-overlay" :style="{backgroundImage:`url(${service.bgImg})`}"></div>
                        <div class="inner">
                            <div class="content">
                                <h5 class="heading heading-h5">{{ service.heading }}</h5>
                                <p>{{ service.text }}</p>
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
                essentialService: {
                    subHeading: "Our Services",
                    heading: "We are a Non Emergency <br> Medical & Non-Medical transportation service.",
                    serviceContent: "DMD is a unique, full service, specialized transportation company. We provide a caring, safe and reliable driving service. Our mission is to provide safe, reliable, cost effective solutions to all your specialized transportation needs.",
                    services: [
                        {
                            id: 1,
                            heading: "Door to door pickup/drop off",
                            text: "We provide door to door service from the origin to destination with Wheel chair assitance if required.",
                           
                        },
                        {
                            id: 3,
                            heading: "Hand in hand",
                            text: "We go an extra mile and provide you additional care and make sure you are safe.",
                            
                        },
                        {
                            id: 3,
                            heading: "Ambulance",
                            text: "We provide with cost effective non emergency Ambulance services with stretcher if required.",
                            
                        }
                    ]
                },
            }
        }
    };
</script>