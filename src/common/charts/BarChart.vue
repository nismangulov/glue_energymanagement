<template>
  <div class="bar-chart"></div>
</template>

<script>
import BaseChart from './BaseChart'
import * as d3 from 'd3'

export default BaseChart.extend({
  name: 'bar-chart',
  props: ['data'],
  mounted: function () {
    window.addEventListener('resize', this.renderChart)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.renderChart)
  },
  methods: {
    renderChart () {
      while (this.$el.firstChild) {
        this.$el.removeChild(this.$el.firstChild);
      }

      if (!this.data.length) {
        return
      }

      let width = this.$el.offsetWidth;
      let height = width * 0.75;
      let padding = 30;
      
      let svg = d3.select(this.$el).append("svg").attr("width", width).attr("height", height);

      var xScale = d3.scaleBand()
        .rangeRound([padding, width - padding])
        .padding(0.1)
        .domain(this.data.map((d) => d.title));

      var yScale = d3.scaleLinear()
        .domain([0, d3.max(this.data, (d) => d.value)])
        .range([height - padding, padding]);

      svg.append("g")
        .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
        .call(d3.axisBottom(xScale));

      svg.append("g")
        .attr("transform", "translate(" + padding + "," + 0 + ")")
        .call(d3.axisLeft(yScale));

      svg.append("g")
        .selectAll("rect")
        .data(this.data)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d.title))
        .attr("y", (d) => yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - padding - yScale(d.value))
        .attr("fill", "steelblue");
    }
  },
  watch: {
    data: 'renderChart'
  }
})
</script>

<style>

</style>