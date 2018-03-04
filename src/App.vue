<template>
  <v-app light>
    <v-container :fluid="fluid" class="pa-0">
      <v-toolbar class="primary" style="height:28px;" primary>
        <v-toolbar-items>
          <div class="contenedor_idiomas">
            <ul class="idiomas">
              <li><a href="/nl" class="nl"></a></li>
              <li class="selected"><a href="/en" class="us"></a></li>
              <li><a href="/es" class="mx"></a></li>
            </ul>
          </div>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <span v-text="title" style="margin-top: -30px;"></span>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <template v-for="item in displaySettings.top_nav_links">
            <v-btn :to="{path: item.target_path}" exact flat>{{item.link_title}}</v-btn>
          </template>
          <v-btn></v-btn>
        </v-toolbar-items>
<!--         <v-menu offset-y>
          <v-btn icon dark slot="activator">
            <v-icon dark>language</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="lang in locales" :key="lang" @mouseover.native="changeLocale(lang)">
              <v-list-tile-title>
                {{lang}}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn icon dark slot="activator">
            <v-icon dark>format_paint</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="n in colors" :key="n" :class="n" @mouseover.native="theme = n">
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon dark>language</v-icon>
          </v-btn>
        </v-menu> -->
      </v-toolbar>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>tttt</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <ThemeGenerator></ThemeGenerator>
      <v-content>
        <router-view/>
        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Powered with
                <v-icon class="red--text">favorite</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">PropertyWebBuilder</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-container>
  </v-app>
</template>
<script>
import ThemeGenerator from '@/components/ThemeGenerator'
export default {
  components: {
    ThemeGenerator
  },
  data() {
    return {
      locales: ['en', 'nl', 'es'],
      colors: ['blue', 'green', 'purple', 'red'],
      fluid: true,
      clipped: false,
      drawer: true,
      fixed: false,
      // items: [{
      //   icon: 'bubble_chart',
      //   title: 'Inspire'
      // }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'PropertyWebBuilder'
    }
  },
  methods: {
    changeLocale(to) {
      // global.helper.ls.set('locale', to)
      // below works but I think it will be better 
      // to reload the app...
      this.$store.commit('setCurrentLocale', to)
      this.$store.dispatch('loadSettings')
      // this.$i18n.locale = to
    },
  },
  name: 'App',
  beforeCreate: function() {
    // when served by rails, "/" should redirect to a route 
    // with a locale but just in case will default to "en"
    let locale = this.$route.params["locale"] || "en"
    this.$store.commit('setCurrentLocale', locale)
  },
  mounted: function() {
    this.$store.dispatch('loadSettings')
  },
  computed: {
    displaySettings() {
      return this.$store.state.displaySettings
    },
  },
}

</script>
<style scoped>
.contenedor_idiomas {
  /*background: blue;*/
}

ul.idiomas {
  float: right;
  padding: 0 15px 10px 10px;
  margin: -7px 0px -5px 10px;
  background-color: #fff;
}

ul.idiomas li {
  float: left;
  list-style: none outside none;
  margin: 0 0 0 5px;
  padding: 11px 0 0 0;
  width: 20px;
}

ul.idiomas li a {
  display: block;
  width: 20px;
  height: 14px;
  outline: 1px solid #555;
  margin: 0;
}

ul.idiomas .es {
  background: url("/assets/idiomas.png") 0 0 no-repeat;
}

ul.idiomas .en,
ul.idiomas .uk {
  background: url("/assets/idiomas.png") -20px 0;
}

ul.idiomas .ru {
  background: url("/assets/idiomas.png") -40px 0;
}

ul.idiomas .sv {
  background: url("/assets/idiomas.png") -60px 0;
}

ul.idiomas .no {
  background: url("/assets/idiomas.png") -80px 0;
}

ul.idiomas .de {
  background: url("/assets/idiomas.png") -100px 0;
}

ul.idiomas .fr {
  background: url("/assets/idiomas.png") -120px 0;
}

ul.idiomas .ne {
  background: url("/assets/idiomas.png") -140px 0;
}

ul.idiomas .ch {
  background: url("/assets/idiomas.png") -160px 0;
}

ul.idiomas .fi {
  background: url("/assets/idiomas.png") -180px 0;
}

ul.idiomas .eu {
  background: url("/assets/idiomas.png") -200px 0;
}

ul.idiomas .pt {
  background: url("/assets/idiomas.png") -220px 0;
}

ul.idiomas .ar {
  background: url("/assets/idiomas.png") -240px 0;
  /*  background: url('/images/arab_league_mini.png');
  background: url('/images/egypt_flag.png');
*/
}

ul.idiomas .ca {
  background: url("/assets/idiomas.png") -260px 0;
}

ul.idiomas .br {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/br.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .cl {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/cl.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .hi {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/hi.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .it {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/it.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .mx {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/mx.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .nl {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/nl.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .pl {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/pl.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .ro {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/ro.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .us {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/us.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .vi {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/vn.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .tr {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/tr.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .kr {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/kr.svg") no-repeat;
  background-size: cover;
}

ul.idiomas .bg {
  background: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/flags/4x3/bg.svg") no-repeat;
  background-size: cover;
}

ul.idiomas li.selected,
ul.idiomas li:hover {
  background: url("/assets/simple-nav-arrow.png") no-repeat top center;
}

</style>
