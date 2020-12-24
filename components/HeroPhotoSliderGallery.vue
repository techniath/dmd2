<template>
    <div class="photo-slider-area pt--150 pb--100 pt_md--70 pt_sm--50 pb_md--10 pb_sm--10 pl--100 pr_lg--0 pl_lg--0 pr_md--0 pl_md--0 pr_sm--0 pl_sm--0">
        <div class="photo-slide-wrapper">
            <div class="brook-element-carousel swiper-dot-vertical-center button-gray">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                        <div class="single-photo-slider-inner">
                            <div class="single-photo-slider">
                                <div class="image-wrapper">
                                    <n-link :to="slider.url">
                                        <img class="w-100" :src="slider.image" alt="slider.alt">
                                    </n-link>
                                </div>
                                <div class="text-wrapper">
                                    <div class="text">
                                        <h2 class="paragraph font-reenie">{{ slider.heading }}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper>

                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    autoplay: true,
                    speed: 1000,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },

                sliders: [
                    {
                        id: 1,
                        heading: "We are determined to provide our clients with excellent service, convenient access, and extraordinary value. We employ the most qualified personnel, offering a positive workplace, corporate growth and leadership opportunities to all.",
                        image: "/img/slider/photo-slide/wheel-chair.png",
                        alt: "image",
                        url: "/x"
                    },
                    {
                        id: 2,
                        heading: "The spectacle before us was indeed sublime.",
                        image: "/img/slider/photo-slide/photo-slide-2.jpg",
                        alt: "image",
                        url: "/y"
                    },
                    {
                        id: 3,
                        heading: "The face of the moon was in shadow.",
                        image: "/img/slider/photo-slide/photo-slide-3.jpg",
                        alt: "image",
                        url: "/z"
                    }
                ]
            }
        }
    };
</script>
