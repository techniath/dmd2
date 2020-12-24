import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03ba4f46 = () => interopDefault(import('..\\pages\\about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _03d67e48 = () => interopDefault(import('..\\pages\\about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _03e495c9 = () => interopDefault(import('..\\pages\\about-us-04.vue' /* webpackChunkName: "pages/about-us-04" */))
const _3307b0f8 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _5e000a92 = () => interopDefault(import('..\\pages\\contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _f83fc726 = () => interopDefault(import('..\\pages\\contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _32ec44aa = () => interopDefault(import('..\\pages\\home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _f63467c6 = () => interopDefault(import('..\\pages\\home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _033db8c0 = () => interopDefault(import('..\\pages\\home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _49865d6f = () => interopDefault(import('..\\pages\\home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _12ec614e = () => interopDefault(import('..\\pages\\home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _58b14651 = () => interopDefault(import('..\\pages\\home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _19c833fe = () => interopDefault(import('..\\pages\\home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _1868b34c = () => interopDefault(import('..\\pages\\home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _e6f89cb2 = () => interopDefault(import('..\\pages\\home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _69523e08 = () => interopDefault(import('..\\pages\\home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _dbdc7ef2 = () => interopDefault(import('..\\pages\\home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _e519a4ba = () => interopDefault(import('..\\pages\\home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _a8331c54 = () => interopDefault(import('..\\pages\\home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _00d5b4d5 = () => interopDefault(import('..\\pages\\home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _a9adfc6c = () => interopDefault(import('..\\pages\\home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _0cf80828 = () => interopDefault(import('..\\pages\\home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _ae7b7afe = () => interopDefault(import('..\\pages\\home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _590b8cf6 = () => interopDefault(import('..\\pages\\home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _0d69e410 = () => interopDefault(import('..\\pages\\home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _5cda69c5 = () => interopDefault(import('..\\pages\\home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _f27fa33e = () => interopDefault(import('..\\pages\\home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _0641897e = () => interopDefault(import('..\\pages\\home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _3b67b98a = () => interopDefault(import('..\\pages\\home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _57e41e62 = () => interopDefault(import('..\\pages\\home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _17626299 = () => interopDefault(import('..\\pages\\pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _30756ac6 = () => interopDefault(import('..\\pages\\services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _9ea60eba = () => interopDefault(import('..\\pages\\services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _2a01b938 = () => interopDefault(import('..\\pages\\services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _5867e918 = () => interopDefault(import('..\\pages\\team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _58760099 = () => interopDefault(import('..\\pages\\team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _30ed7b2c = () => interopDefault(import('..\\pages\\team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _13a9560e = () => interopDefault(import('..\\pages\\blog\\blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _52d5e89a = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _13adbd7e = () => interopDefault(import('..\\pages\\blog\\blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _7e08ddea = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _ab9f0a0e = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _76535699 = () => interopDefault(import('..\\pages\\blog\\blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _bf87d90e = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _acac6924 = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _b4f51b12 = () => interopDefault(import('..\\pages\\blog\\blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _709290ec = () => interopDefault(import('..\\pages\\blog\\blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _41ebd1d6 = () => interopDefault(import('..\\pages\\blog\\blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _181fde5f = () => interopDefault(import('..\\pages\\blog\\blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _524ce4c6 = () => interopDefault(import('..\\pages\\element\\accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _26ffb623 = () => interopDefault(import('..\\pages\\element\\brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _c868a644 = () => interopDefault(import('..\\pages\\element\\call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _f9ee6428 = () => interopDefault(import('..\\pages\\element\\carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _b4407a4a = () => interopDefault(import('..\\pages\\element\\contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _489c306c = () => interopDefault(import('..\\pages\\element\\dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _a467ef5a = () => interopDefault(import('..\\pages\\element\\flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _595de965 = () => interopDefault(import('..\\pages\\element\\gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _0d07d957 = () => interopDefault(import('..\\pages\\element\\icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _51ffe230 = () => interopDefault(import('..\\pages\\element\\instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _36a810da = () => interopDefault(import('..\\pages\\element\\lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _6f6822fa = () => interopDefault(import('..\\pages\\element\\message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _00cd417c = () => interopDefault(import('..\\pages\\element\\pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _83f7d5da = () => interopDefault(import('..\\pages\\element\\tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _508c9462 = () => interopDefault(import('..\\pages\\element\\team.vue' /* webpackChunkName: "pages/element/team" */))
const _2a731f1d = () => interopDefault(import('..\\pages\\element\\testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _59acdef2 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _5c8b8522 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _7feec15f = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _5905540a = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _2ffe9284 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _4afce6b2 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _35479c74 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _5df6f20c = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _376d9f6e = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _3735416a = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-03.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-03" */))
const _191b0232 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _fc4c42fc = () => interopDefault(import('..\\pages\\portfolio\\portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _3dae8d64 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _6226f848 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us-01",
    component: _03ba4f46,
    name: "about-us-01"
  }, {
    path: "/about-us-03",
    component: _03d67e48,
    name: "about-us-03"
  }, {
    path: "/about-us-04",
    component: _03e495c9,
    name: "about-us-04"
  }, {
    path: "/career",
    component: _3307b0f8,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _5e000a92,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _f83fc726,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _32ec44aa,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _f63467c6,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _033db8c0,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _49865d6f,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _12ec614e,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _58b14651,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _19c833fe,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _1868b34c,
    name: "home-essential"
  }, {
    path: "/home-freelancer",
    component: _e6f89cb2,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _69523e08,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _dbdc7ef2,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _e519a4ba,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _a8331c54,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _00d5b4d5,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _a9adfc6c,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _0cf80828,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _ae7b7afe,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _590b8cf6,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _0d69e410,
    name: "home-portfolio-slide"
  }, {
    path: "/home-product-landing",
    component: _5cda69c5,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _f27fa33e,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _0641897e,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _3b67b98a,
    name: "home-start-up"
  }, {
    path: "/home-vertical-menu",
    component: _57e41e62,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _17626299,
    name: "pricing-plans"
  }, {
    path: "/services-classic",
    component: _30756ac6,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _9ea60eba,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _2a01b938,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _5867e918,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _58760099,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _30ed7b2c,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _13a9560e,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _52d5e89a,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _13adbd7e,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _7e08ddea,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _ab9f0a0e,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _76535699,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _bf87d90e,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _acac6924,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _b4f51b12,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _709290ec,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _41ebd1d6,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _181fde5f,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _524ce4c6,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _26ffb623,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _c868a644,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _f9ee6428,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _b4407a4a,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _489c306c,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _a467ef5a,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _595de965,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _0d07d957,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _51ffe230,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _36a810da,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _6f6822fa,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _00cd417c,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _83f7d5da,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _508c9462,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _2a731f1d,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _59acdef2,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _5c8b8522,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _7feec15f,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _5905540a,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _2ffe9284,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _4afce6b2,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _35479c74,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _5df6f20c,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _376d9f6e,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-03",
    component: _3735416a,
    name: "portfolio-portfolio-grid-metro-03"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _191b0232,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _fc4c42fc,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/:id?",
    component: _3dae8d64,
    name: "blog-id"
  }, {
    path: "/",
    component: _6226f848,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
