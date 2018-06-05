<template lang=html>
  <v-app id="inspire">

<!--    <v-navigation-drawer fixed app clipped disable-resize-watcher permanent touchless width=200>
      <v-list dense>
         <v-list-tile v-for="menuitem in menuitems" :to="{path: menuitem.path}">
               <v-list-tile-action>
                  <v-icon :color="menuitem.color">{{ menuitem.icon }}</v-icon>
               </v-list-tile-action>
               <v-list-tile-content>
                  <v-list-tile-title>{{menuitem.name}}</v-list-tile-title>
               </v-list-tile-content>
         </v-list-tile>
      </v-list>
   </v-navigation-drawer> -->

       <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed app clipped disable-resize-watcher permanent touchless width=250
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
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
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item.alticon"
            append-icon=""
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
              @click=""
               :to="{path: item.path + '/' + child.path}"
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
          <v-list-tile v-else :key="item.text" @click="" :to="{path: item.path}">
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
               <img style="height: 25px" class="mr-3 mt-2" src="./logo_nokia.svg" alt="Nokia Logo"></img>
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
            path: "map",
            text: "Map"
          },
          {
            icon: "fa-th-list",
            path: "stations",
            text: "Stations"
          },
          {
            icon: "fa-calendar-alt",
            path: "history",
            text: "Historical data"
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
            path: "stat",
            text: "Statistic"
          },
          {
            icon: "fa-map",
            path: "map",
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
          {
            icon: "fa-sliders-h",
            path: "main",
            text: "Main"
          },
          {
            icon: "fa-external-link-square-alt",
            path: "unilight",
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
            path: "acs-lora",
            text: "Access Control System"
          },
          {
            icon: "fa-video",
            path: "video",
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
            path: "meters",
            text: "Meters"
          },
          {
            icon: "fa-external-link-square-alt",
            path: "linergo",
            text: "Linergo"
          },
          {
            icon: "fa-external-link-square-alt",
            path: "gascloud",
            text: "Gascloud"
          }
        ]
      },
      {
        path: "energy",
        text: "Energy management",
        icon: "fa-plug",
        alticon: "fa-plug",
        children: [
           {
            icon: "fa-chart-line",
            path: "stat",
            text: "Statistic"
          },
          {
            icon: "fa-exclamation-triangle",
            path: "incidents",
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
            path: "stat",
            text: "Statistic"
          },
          {
            icon: "fa-th-list",
            path: "сontainers",
            text: "Сontainers"
          },
          {
            icon: "fa-calendar-alt",
            path: "plannicg",
            text: "Planning"
          }
        ]
      }
    ]
  })
};
</script>
