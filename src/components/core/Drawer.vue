<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    disable-route-watcher
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      :gradient="sidebarOverlayGradiant"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-if="responsive"
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-tile>
        <v-list
          v-for="(link, i) in links"
          :key="i"
        >
          <template
            v-if="link.children">
            <v-list-group
              no-action
              value="true"
            >
              <template v-slot:activator>
                <v-list-tile
                  :active-class="color"
                  avatar
                >
                  <v-list-tile-action>
                    <v-icon> {{ link.icon }} </v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title
                    v-text="link.text"
                  />
                </v-list-tile>
              </template>
              <v-list-tile
                v-for="(child, i) in link.children"
                :key="i"
                :to="child.to"
                :active-class="color"
                avatar
                class="v-list-item">
                <v-list-tile-action>
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  v-text="child.text"
                />
              </v-list-tile>
            </v-list-group>
          </template>
          <template
            v-else>
            <v-list-tile
              :to="link.to"
              :active-class="color"
              avatar
            >
              <v-list-tile-action>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title
                v-text="link.text"
              />
            </v-list-tile>
          </template>
        </v-list>
        <v-list-tile
          active-class="success"
          class="v-list-item v-list__tile--buy"
          to="/upgrade"
        >
          <v-list-tile-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="font-weight-light">
            Upgrade To PRO
          </v-list-tile-title>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: 'favicon2.png',
    links: [
      {
        to: '/home',
        icon: 'home',
        text: 'Home'
      },
      {
        icon: 'mdi-gamepad-variant-outline',
        text: 'Game',
        to: '/game',
        children: [
          {
            to: '/game/problems',
            icon: 'mdi-head-question-outline',
            text: 'Problems'
          },
          {
            to: '/game/fight',
            icon: 'mdi-sword-cross',
            text: 'Fight'
          },
          {
            to: '/game/replay',
            icon: 'replay',
            text: 'Replay'
          }
        ]
      },
      {
        to: '/ranking',
        icon: 'mdi-crown-outline',
        text: 'Ranking'
      },
      {
        to: '/community',
        icon: 'mdi-account-group',
        text: 'Community'
      },
      {
        to: '/help',
        icon: 'mdi-help-circle',
        text: 'Help'
      }
    ],
    clipped: true,
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    },
    sidebarOverlayGradiant () {
      return `${this.$store.state.app.sidebarBackgroundColor}, ${this.$store.state.app.sidebarBackgroundColor}`
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;
      padding: 10px;
      margin: 10px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

    div.v-responsive.v-image > div.v-responsive__content {
      overflow-y: auto;
    }
  }
</style>
