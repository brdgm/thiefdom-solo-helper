<template>
  <div>
    <svg class="compass" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(100.66583,-852.27527)">
        <g>
          <g transform="matrix(0.41543529,-0.17207893,0.17207893,0.41543529,-122.74025,632.70587)" class="inner">
            <path d="m 100,852.36216 -30,170.00004 30,30 0,-200.00004 z"/>
            <path d="m 99.962367,852.36216 30.000003,170.00004 -30.000003,30 0,-200.00004 z"/>
            <path d="m 99.96237,1253.4824 30,-170 -30,-30 0,200 z"/>
            <path d="m 100,1253.4824 -30,-170 30,-30 0,200 z"/>
            <path d="m 300.54134,1052.9411 -170.00004,-30 -30,30 200.00004,0 z"/>
            <path d="m 300.54134,1052.9035 -170.00004,30 -30,-30 200.00004,0 z"/>
            <path d="m -100.57894,1052.9035 170.00004,30 30,-30 -200.00004,0 z"/>
            <path d="m -100.57894,1052.9411 170.00004,-30 30,30 -200.00004,0 z"/>
          </g>
          <g transform="matrix(0.17207893,-0.41543529,0.41543529,0.17207893,-354.64453,913.27227)" class="inner">
            <path d="m 100,852.36216 -30,170.00004 30,30 0,-200.00004 z"/>
            <path d="m 99.962367,852.36216 30.000003,170.00004 -30.000003,30 0,-200.00004 z"/>
            <path d="m 99.96237,1253.4824 30,-170 -30,-30 0,200 z"/>
            <path d="m 100,1253.4824 -30,-170 30,-30 0,200 z"/>
            <path d="m 300.54134,1052.9411 -170.00004,-30 -30,30 200.00004,0 z"/>
            <path d="m 300.54134,1052.9035 -170.00004,30 -30,-30 200.00004,0 z"/>
            <path d="m -100.57894,1052.9035 170.00004,30 30,-30 -200.00004,0 z"/>
            <path d="m -100.57894,1052.9411 170.00004,-30 30,30 -200.00004,0 z"/>
          </g>
          <path class="ring"
            transform="translate(0,852.36216)"
            d="M 100,37.150391 A 162.84999,162.84999 0 0 0 -62.849609,200 162.84999,162.84999 0 0 0 100,362.84961 162.84999,162.84999 0 0 0 262.84961,200 162.84999,162.84999 0 0 0 100,37.150391 Z M 100,65.5 A 134.5,134.5 0 0 1 234.5,200 134.5,134.5 0 0 1 100,334.5 134.5,134.5 0 0 1 -34.5,200 134.5,134.5 0 0 1 100,65.5 Z"/>
          <g class="outer">
            <path d="m 185.05505,967.86438 -84.82832,59.37982 0,25.4485 84.82832,-84.82832 z"/>
            <path d="m 185.03909,967.84842 -59.37983,84.82828 -25.44849,0 84.82832,-84.82828 z"/>
            <path d="m 14.90734,1137.9802 84.828306,-59.3798 0,-25.4485 -84.828306,84.8283 z"/>
            <path d="m 14.9233,1137.9961 59.379814,-84.8283 25.448492,0 -84.828306,84.8283 z"/>
            <path d="m 185.0391,1137.9962 -59.37983,-84.8284 -25.44849,0 84.82832,84.8284 z"/>
            <path d="m 185.05505,1137.9802 -84.82832,-59.3798 0,-25.4485 84.82832,84.8283 z"/>
            <path d="m 14.923283,967.84844 59.379831,84.82836 25.448492,0 -84.828323,-84.82836 z"/>
            <path d="m 14.907335,967.86438 84.828323,59.37982 0,25.4485 -84.828323,-84.82832 z"/>
          </g>
          <g class="outer">
            <path d="m 100,852.36216 -30,170.00004 30,30 0,-200.00004 z" :class="{active:orientation==0}"/>
            <path d="m 99.962367,852.36216 30.000003,170.00004 -30.000003,30 0,-200.00004 z" :class="{active:orientation==0}"/>
            <path d="m 99.96237,1253.4824 30,-170 -30,-30 0,200 z" :class="{active:orientation==2}"/>
            <path d="m 100,1253.4824 -30,-170 30,-30 0,200 z" :class="{active:orientation==2}"/>
            <path d="m 300.54134,1052.9411 -170.00004,-30 -30,30 200.00004,0 z" :class="{active:orientation==1}"/>
            <path d="m 300.54134,1052.9035 -170.00004,30 -30,-30 200.00004,0 z" :class="{active:orientation==1}"/>
            <path d="m -100.57894,1052.9035 170.00004,30 30,-30 -200.00004,0 z" :class="{active:orientation==3}"/>
            <path d="m -100.57894,1052.9411 170.00004,-30 30,30 -200.00004,0 z" :class="{active:orientation==3}"/>
          </g>
        </g>
      </g>
      <g :transform="direction==0 ? `translate(60 80) scale(0.75) rotate(${orientation*90} 190 150)` : `translate(345 80) scale(-0.75 0.75) rotate(${-orientation*90} 190 150)`">
        <path d="M289.006,47.695c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213
          c42.876,42.877,42.876,112.642,0,155.518c-20.77,20.77-48.385,32.209-77.759,32.209s-56.989-11.439-77.759-32.209
          c-23.143-23.142-34.505-55.142-31.806-87.099l30.104,20.115c2.522,1.686,5.428,2.528,8.333,2.528c2.905,0,5.812-0.843,8.333-2.528
          c5.045-3.371,7.562-9.448,6.379-15.398l-17.238-86.668c-0.776-3.902-3.07-7.335-6.378-9.546c-3.308-2.209-7.357-3.015-11.26-2.24
          L12.074,60.828c-5.95,1.184-10.601,5.835-11.786,11.786c-1.184,5.95,1.334,12.027,6.378,15.398l46.189,30.863
          c-9.238,45.745,4.899,93.458,38.206,126.764c26.436,26.436,61.585,40.996,98.972,40.996s72.536-14.559,98.972-40.996
          C343.579,191.066,343.579,102.268,289.006,47.695z M89.883,75.94l7.248,36.438L78.14,99.689c-0.017-0.011-0.034-0.022-0.05-0.034
          L53.445,83.187L89.883,75.94z"/>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { PropType } from 'vue'
import CompassOrientation from '@/services/enum/CompassOrientation'
import CompassDirection from '@/services/enum/CompassDirection'

export default defineComponent({
  name: 'CompassNavigation',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  props: {
    orientation: {
      type: Number as PropType<CompassOrientation>,
      required: true
    },
    direction: {
      type: Number as PropType<CompassDirection>,
      required: true
    },
  }
})
</script>

<style lang="scss" scoped>
.compass {
  width: 200px;
  .inner {
    path:nth-child(odd) {
      fill:#0f567c;fill-opacity:1;fill-rule:evenodd;stroke:#0f567c;stroke-width:2.22388315px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;
    }
    path:nth-child(even) {
      fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#0f567c;stroke-width:2.22388315px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;
    }
  }
  .outer {
    path:nth-child(odd) {
      fill:#0f567c;fill-opacity:1;fill-rule:evenodd;stroke:#0f567c;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;
      &.active {
        fill:#a00;
      }
    }
    path:nth-child(even) {
      fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#0f567c;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;
      &.active {
        fill:#f33;
      }
    }
  }
  .ring {
    opacity:1;fill:#809fbc;fill-opacity:1;stroke:#809fbc;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;
  }
}
</style>
