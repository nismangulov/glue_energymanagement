<template>
   <div class="bar-outer">
      <div class="bar-inner" :style="get_outer_styles()">
         <div class="bar" :style="get_styles()"></div>

      </div>
      <div class="value">{{value}}V</div>
   </div>
</template>

<script>
import Vue from 'vue'
import BaseChart from './BaseChart'
import * as d3 from 'd3'

export default Vue.extend({
   name: 'voltage-chart',
   props: ['value'],
   data: () => ({
      height: 0,
      color: 'transparent'
   }),
   mounted: function() {
      window.addEventListener('resize', this.setData)
      let that = this

      setTimeout(function() {
         that.setData()
      }, 1)
   },
   methods: {
      setData: function() {
         const parent = this.$el.parentNode;
         const computedStyle = getComputedStyle(parent);

         this.height = parent.offsetHeight

         this.height = parent.clientHeight - (parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)) - 50

      },
      get_outer_styles: function() {
         const {height} = this
         return `height: ${height}px;`
      },
      get_styles: function() {
         const value = Math.min(this.value, 300)
         const height = this.height * (value / 300)
         return `height: ${height}px; background-color: ${this.get_color(value)};`
      },
      get_color: function(value) {
         if (value <= 207) {
            return '#E08F5F'
         } else if (value <= 252) {
            return '#51985A'
         } else {
            return '#C25248'
         }
      }
   }
})
</script>

<style>
.bar {
   width: 64px;
   transition: height 0.1s ease;
}

.bar-outer {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
}

.bar-inner {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   background-color: #E5E5E5;
}

.value {
   font-weight: 500;
   font-size: 32px;
   line-height: 50px;
}
</style>
