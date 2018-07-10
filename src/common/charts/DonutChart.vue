<template>
  <svg class="donut-chart"></svg>
</template>

<script>
import BaseChart from './BaseChart'
import * as d3 from 'd3'

export default BaseChart.extend({
  name: 'donut-chart',
  props: ['data'],
  methods: {
    renderChart () {
      const width = 250
      const height = 250
      const radius = Math.min(width, height) / 2;
      const legendLeftOffset = 'calc(50% - 30px)'
      const legendTopOffset = (Math.min(width, height) - (this.data.length * 20)) / 2

      const arc = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 50);

      const pie = d3.pie()
        .sort(null)
        .value((data) => data.value);

      const svg = d3.select(this.$el)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("svg")
        .attr("class", "chart")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const g = svg.selectAll(".arc")
        .data(pie(this.data))
        .enter()
        .append("g")
        .attr("class", "arc");

      g.append("path")
        .attr("d", arc)
        .style("fill", (data) => data.data.color);

      const svgLegend = d3.select(this.$el)
        .append("svg")
        .attr("class", "legend");

      const legend = svgLegend.selectAll('.legend')
        .data(this.data)
        .enter()
        .append('g')
        .attr("class", "legend-item")
        .style("transform", (d, i) => `translate(${legendLeftOffset}, ${(i * 20) + legendTopOffset}px)`)
        
      legend.append('rect')
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", (data) => data.color)
      
      legend.append('text')
        .attr("x", 20)
        .attr("y", 10)
        .text((data) => data.title)
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", 15)
    }
  },
  watch: {
    data: 'renderChart'
  }
})
</script>

<style>
.donut-chart {
  width: 100%;
  height: 100%;
}

.donut-chart text {
  font: 10px sans-serif;
  text-anchor: middle;
}
</style>