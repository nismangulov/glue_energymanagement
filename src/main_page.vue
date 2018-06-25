<template lang=html>
  <v-app id="inspire">
       <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed app disable-resize-watcher permanent touchless width=250
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item.alticon"
            append-icon=""  
            v-bind:value="get_expanded_status(item.path)"
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
               :to="{path: child.path}"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon small class="ml-2">{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="ml-2">
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" :to="{path: item.path}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

   <v-toolbar color="primary" dark app fixed clipped-left>
         <v-menu>
            <v-toolbar-title slot="activator">
                <img class="mr-3 mt-2" src="./assets/logo_nokia.svg" height="25px" alt="Nokia Logo">
               Smart City control center
            </v-toolbar-title>
            </v-menu>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
               <div class="title mt-4" >Powered by IMPACT</div>
            </v-toolbar-items>
   </v-toolbar>

    <v-content>
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        path: "dashboard",
        text: "Dashboard",
        icon: "fa-tachometer-alt"
      },
      {
        path: "eco_monitoring",
        text: "Ecological monitoring",
        icon: "fa-tree",
        alticon: "fa-tree",
        children: [
          {
            icon: "fa-map",
            path: "/eco_monitoring/map",
            text: "Map"
          },
          {
            icon: "fa-th-list",
            path: "/eco_monitoring/stations",
            text: "Stations"
          },
          {
            icon: "fa-calendar-alt",
            path: "/eco_monitoring/history",
            text: "Historical data"
          },
          {
            icon: "fa-calendar-alt",
            path: "/eco_monitoring/aqi",
            text: "AQI"
          }
        ]
      },
      {
        path: "parking",
        text: "Parking",
        icon: "fa-car",
        alticon: "fa-car",
        children: [
          {
            icon: "fa-chart-line",
            path: "/parking/stat",
            text: "Statistic"
          },
          {
            icon: "fa-map",
            path: "/parking/map",
            text: "Map"
          }
        ]
      },
      {
        path: "lighting",
        text: "Lighting",
        icon: "fa-lightbulb",
        alticon: "fa-lightbulb",
        children: [
          /* {
            icon: "fa-sliders-h",
            path: "/lighting/main",
            text: "Main"
          }, */
          {
            icon: "fa-external-link-square-alt",
            path: "/lighting/unilight",
            text: "Unilight"
          }
        ]
      },
      {
        path: "safety",
        text: "Safety",
        icon: "fa-unlock-alt",
        alticon: "fa-unlock-alt",
        children: [
          {
            icon: "fa-key",
            path: "/safety/acs_lora",
            text: "Access Control System"
          },
          {
            icon: "fa-video",
            path: "/safety/video",
            text: "Video analitics"
          }
        ]
      },
      {
        path: "metering",
        text: "Metering",
        icon: "fa-chart-bar",
        alticon: "fa-chart-bar",
        children: [
          {
            icon: "fa-compress",
            path: "/metering/meters",
            text: "Meters"
          },
          {
            icon: "fa-external-link-square-alt",
            path: "/metering/linergo",
            text: "Linergo"
          },
          {
            icon: "fa-external-link-square-alt",
            path: "/metering/gascloud",
            text: "Gascloud"
          }
        ]
      },
      {
        path: "infrastructure",
        text: "Infrastructure",
        icon: "fa-plug",
        alticon: "fa-plug",
        children: [
          {
            icon: "fa-chart-line",
            path: "/infrastructure/energy_management",
            text: "Energy management"
          },
          {
            icon: "fa-chart-line",
            path: "/infrastructure/monitoring",
            text: "Monitoring"
          },
          {
            icon: "fa-exclamation-triangle",
            path: "/infrastructure/incidents",
            text: "Incidents"
          }
        ]
      },
      {
        path: "waste",
        text: "Waste",
        icon: "fa-trash-alt",
        alticon: "fa-trash-alt",
        children: [
          {
            icon: "fa-chart-line",
            path: "/waste/stat",
            text: "Statistic"
          },
          {
            icon: "fa-th-list",
            path: "/waste/containers",
            text: "Сontainers"
          },
          {
            icon: "fa-calendar-alt",
            path: "/waste/planning",
            text: "Planning"
          }
        ]
      }
    ]
  }),
  methods: {
    get_expanded_status(path) {
      if (window.location.href.includes(path)) {
        return true
      }

      return false
    }
  }
};
</script>
