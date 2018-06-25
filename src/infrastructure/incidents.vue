<template>
   <v-container grid-list-md fill-height>
      <v-layout column fix-layout>
         <template v-for="line in lines">
            <v-flex d-flex md2 v-bind:key="line.index">
               <v-layout row fix-layout>
                  <template v-for="card in line.cards">
                     <v-flex d-flex v-bind:key="card.index">
                        <v-card :color="card.color">
                           <span>{{card.index+"/"+line.index}}</span>
                        </v-card>
                     </v-flex>
                  </template>
               </v-layout>
            </v-flex>
         </template>
      </v-layout>
   </v-container>
</template>

<script>
import Vue from "vue";
import VueTimers from "vue-timers";
Vue.use(VueTimers);

export default {
  data: () => ({
    lines: [],
    row: 8,
    column: 12,
    timer_value: 2000
  }),
  created: function() {
    this.timers.update.time = this.timer_value;
    for (let lines_index = 0; lines_index <= this.row; lines_index++) {
      Vue.set(this.lines, lines_index, { index: lines_index });
      Vue.set(this.lines[lines_index], "cards", {});
      for (let cards_index = 0; cards_index <= this.column; cards_index++) {
        Vue.set(this.lines[lines_index].cards, cards_index, {
          index: cards_index,
          color: "green"
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
      for (let lines_index = 0; lines_index <= this.row; lines_index++) {
        for (let cards_index = 0; cards_index <= this.column; cards_index++) {
          this.lines[lines_index].cards[cards_index].color = "red";
        }
      }
      console.log(this.lines);

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
