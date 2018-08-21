<template>
   <div class="bar-wrapper">
      <div class="bar-outer">
         <div class="bar-left" :style="get_outer_styles()">
            <p class="value" :style="get_value_styles()">{{value}}V</p>
         </div>
         <div class="bar-center" :style="get_outer_styles()">
            <div class="bar" :style="get_bar_styles()"></div>
         </div>
         <div class="bar-right" :style="get_outer_styles()">
            <p class="value value-max">300V</p>
            <p class="value value-red">253V</p>
            <p class="value value-green">207V</p>
            <p class="value value-min">150V</p>
         </div>
      </div>
      <div class="line">{{line}}</div>
   </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
   name: 'voltage-chart',
   props: ['value', 'line'],
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
         this.height = parent.clientHeight - (parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)) - 50
      },
      get_outer_styles: function() {
         const {height} = this
         return `height: ${height}px;`
      },
      get_bar_styles: function() {
         const heightValue = Math.min(this.value - 150, 150)
         const height = this.height * (heightValue / 150)

         const colorValue = Math.min(this.value, 300)
         return `height: ${height}px; background-color: ${this.get_color(colorValue)};`
      },
      get_value_styles: function() {
         const heightValue = Math.min(this.value - 150, 150)
         let height = this.height * (heightValue / 150) - 12

         if (height < 0) {
            height = 0
         } else if (height > this.height) {
            height = this.height
         }

         return `bottom: ${height}px; position: absolute;`
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
.bar-wrapper {
   display: flex;
   flex-direction: column;
   align-items: center;
}

.bar-outer {
   display: flex;
   align-items: flex-end;
}

.bar-center {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   background-color: #E5E5E5;
}

.bar {
   width: 32px;
   transition: height 0.1s ease;
}

.bar-left {
   width: 32px;
   position: relative;
}

.value {
   font-size: 12px;
   line-height: 12px;
   margin: 0;
   transition: bottom 0.1s ease;
   font-weight: 600;
   text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
}

.value-max {
   position: absolute;
   top: 0px;
   left: 4px;
   color: #C25248;
}

.value-min {
   position: absolute;
   bottom: 0px;
   left: 4px;
   color: #E08F5F;
}

.value-red {
   position: absolute;
   left: 4px;
   bottom: calc(68.66% - 12px);
   color: #C25248;
}

.value-green {
   position: absolute;
   left: 4px;
   bottom: calc(38% - 12px);
   color: #51985A;
}

.bar-right {
   width: 32px;
   position: relative;
}

.line {
   font-weight: 500;
   font-size: 32px;
   line-height: 50px;
}
</style>
