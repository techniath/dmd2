<template>
    <div class="bk-accordion-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1">
        <div class="container">
            <div class="row">
                <!-- Start Single Accordion -->
                <div class="col-md-6">
                    <div class="brook-section-title mb--50 mb_sm--20 mb_md--20">
                        <h3 class="heading heading-h3">What we do</h3>
                    </div>
                    <div class="bk-accordion-style--2" id="accordionExampl3">
                        <b-card no-body>
                            <b-card-header header-tag="header">
                                <b-button block v-b-toggle.accordion-1 class="acc-btn">
                                    Professional & Caring
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion">
                                <b-card-body>
                                    <b-card-text>
                                        Our Professional drivers will assist you throughout the journey and bring you home safely. We are wheelchair-friendly and an ambulatory special Medical transportation service provider.
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header">
                                <b-button block v-b-toggle.accordion-2 class="acc-btn">
                                    With you all the way
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" visible accordion="my-accordion">
                                <b-card-body>
                                    <b-card-text>
                                        Driving Miss Daisy is different from other transportation providers in that we provide physical assistance to our clients. We're not just drivers, we're caregivers
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header">
                                <b-button block v-b-toggle.accordion-3 class="acc-btn">
                                    Call Us for a trip to... 
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" visible accordion="my-accordion">
                                <b-card-body>
                                    <b-card-text>
                                        <ul> <li>Medical appointments</li> <br> <li>Dialysis clinics</li> <br><li> Social and family events</li> <br><li> Airport pick up / drop off (Assistance with checking in is also offered)</li></ul>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </div>
                <!-- End Single Accordion -->

                <!-- Start Single Accordion -->
                <div class="col-md-6 mt_sm--30">
                    <div class="thumb">
                        <img class="w-100" src="/img/corona/wheel-car.jpg" alt="about images">
                    </div>
                </div>
                <!-- End Single Accordion -->
            </div>
        </div>
    </div>
</template>