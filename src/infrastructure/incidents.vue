<template>
   <v-container grid-list-md fill-height fluid>

      <v-layout column fix-layout>
         <template v-for="line in lines">
            <v-flex d-flex md2 v-bind:key="line.index">
               <v-layout row fix-layout>
                  <template v-for="card in line.cards">
                     <v-flex d-flex v-bind:key="card.index" @click="$refs.carddetails.show(card)">
                        <v-card :color="card.color">
                           <span>
                              <!-- {{card.value}} -->
                           </span>
                        </v-card>
                     </v-flex>
                  </template>
               </v-layout>
            </v-flex>
         </template>
      </v-layout>
      <carddetails ref="carddetails"></carddetails>
   </v-container>
</template>

<script>
import Vue from "vue";
import VueTimers from "vue-timers";
Vue.use(VueTimers);

import carddetails from "./components/details.vue";
Vue.component("carddetails", carddetails);

export default {
  data: () => ({
    lines: [],
    row: 8,
    column: 12,
    timer_value: 1000,
    yellow_v: 20,
    red_v: 100
  }),
  created: function() {
    this.timers.update.time = this.timer_value;
    for (let lines_index = 0; lines_index <= this.row; lines_index++) {
      Vue.set(this.lines, lines_index, { index: lines_index });
      Vue.set(this.lines[lines_index], "cards", {});
      for (let cards_index = 0; cards_index <= this.column; cards_index++) {
        Vue.set(this.lines[lines_index].cards, cards_index, {
          index: cards_index,
          color: "green",
          value: 0
        });
      }
    }
  },
  timers: {
    update: {
      autostart: true,
      time: 0
    }
  },
  methods: {
    update(item) {
      let max = 10000;
      let rand;
      for (let lines_index = 0; lines_index <= this.row; lines_index++) {
        for (let cards_index = 0; cards_index <= this.column; cards_index++) {
          rand = this.getRandomInt(0, max);
          if (this.lines[lines_index].cards[cards_index].color === "yellow") {
            if (rand > max - this.red_v) {
              this.lines[lines_index].cards[cards_index].color = "red";
              if (this.red_v > 2) this.red_v = Math.floor(this.red_v / 3);
            }
          }

          rand = this.getRandomInt(0, max);
          if (this.lines[lines_index].cards[cards_index].color === "green") {
            if (rand > max - this.yellow_v) {
              this.lines[lines_index].cards[cards_index].color = "yellow";
              if (this.yellow_v > 2)
                this.yellow_v = Math.floor(this.yellow_v / 4);
            }
          }

          this.lines[lines_index].cards[cards_index].value = rand;
        }
      }
      //console.log(this.lines);

      this.$timer.stop("update");
      this.timers.update.time = this.timer_value;
      this.$timer.start("update");
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};
</script>

<style>
@import "../../node_modules/leaflet/dist/leaflet.css";

.container.fill-height .layout.fix-layout {
  height: calc(100% + 8px);
}

.container.fill-height .layout.fix-layout-large {
  height: calc(100% + 16px);
}

.move-top {
  margin-top: -8px;
}
</style>
