<template>
    <div class="hero-essential-area swiper-arrow-hover">
        <swiper :options="swiperOption">
            <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                <div class="hero-essential-slide bg-cover" :style="{backgroundImage: `url(${slider.bgImage})`}">
                    <div class="container">
                        <div class="row">
                            <div class="col-20">
                                <div class="trans-pink">
                                    <h2 class="hero-title text-dmd" v-html="slider.heading">{{ slider.heading }}</h2>
                                    <h5 class="">{{ slider.subHeading }}</h5>
                                    <n-link to="/" class="brook-btn bk-btn-theme-dmd text-dmd btn-sd-size ">Learn More</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper>
        <!-- slider arrow navigation -->
        <div class="ht-swiper-button ht-swiper-button-prev">
            <i class="ion ion-ios-arrow-back"></i>
        </div>
        <div class="ht-swiper-button ht-swiper-button-next">
            <i class="ion ion-ios-arrow-forward"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                },
                sliders: [
                    {
                        id: 1,
                        heading: "Welcome to Driving Miss Daisy.",
                        subHeading: "We provide non-emergency medical & non-medical transportation services. We are much more affordable, reliable and dependable than a taxi service-you’ll be surprised how cost- effective we are!",
                        bgImage: "/img/corona/fleetimage.jpg"
                    },
                    {
                        id: 2,
                        heading: "With You, For You, Always'",
                        subHeading: "Our vehicles are licensed by the MNDOT and meet or exceed all Federal, state, local, and A.D.A. guidelines",
                        bgImage: "/img/corona/wheelchair.jpg"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
    .hero-essential-slide {
        height: 650px;
        display: flex;
        align-items: center;
        position: relative;
        // res
        @media #{$md-layout}{
            height: 600px;
        }
        @media #{$sm-layout}{
            height: 550px;
        }
        @media #{$small-mobile}{
            height: 450px;
        }
        .hero-content {
            max-width: 500px;
            .hero-title {
                font-size: 48px;
                font-weight: 300;
                // res
                @media #{$sm-layout}{
                    font-size: 40px;
                }
                @media #{$small-mobile}{
                    font-size: 32px;
                }
            }
            h5 {
                color: #777;
                font-size: 20px;
                font-weight: 300;
                line-height: 1.2;
                margin-bottom: 40px;
                // res
                @media #{$sm-layout}{
                    color: #444;
                }
                @media #{$small-mobile}{
                    margin-top: 15px;
                    line-height: 1.5;
                }
            }
        }
    }
    .hero-essential-area {
        .ht-swiper-button {
            color: $black;
            font-size: 30px;
            left: 70px;
            width: 68px;
            height: 68px;
            line-height: 68px;
            border-radius: 50%;
            text-align: center;
            background-color: $white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
            &-next {
                right: 70px;
                left: auto;
            }
        }
    }
    .text-color-home {
        color: #DAA520;
        font-weight: 4000;
    }

    .trans-pink {
    background-color: rgba(218, 165, 32, 0.6);
    border-radius: 15px;
    padding: 5px 25px!important;
}

.text-dmd {
        color: #463d9c;
    }

    .bk-btn-theme-dmd {
        background: #463d9c;
        color: #fff;
    }
    
</style>