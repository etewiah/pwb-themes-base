<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm4>
          <v-card class="elevation-0 transparent">
            <div class="col-md-7">
              <div class="section-title-wr" style="display: none;">
                <h3 class="section-title left"><span>
    Contact
  </span></h3></div>
              <p id="contact-us-prompt">
                Fill in the following form to contact us:
              </p>
              <form action="/contact_us.js" accept-charset="UTF-8" data-remote="true" method="post" class="form-light mt-20 mi_form">
                <input name="utf8" type="hidden" value="✓">
                <input value="en" type="hidden" name="contact[locale]" id="contact_locale">
                <div class="form-group">
                  <label class="obligatorio">
                    Name
                  </label>
                  <input type="text" required="required" aria-required="true" placeholder="Your name" name="contact[name]" id="contact_name" class="form-control texto">
                  <div class="validacion"></div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group pos_relative">
                      <label class="obligatorio">
                        Email
                      </label>
                      <input type="email" required="required" aria-required="true" placeholder="Your email" name="contact[email]" id="contact_email" class="form-control texto">
                      <div class="validacion"></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group pos_relative">
                      <label>
                        Telephone
                      </label>
                      <input type="text" aria-required="false" placeholder="Fixed or mobile" name="contact[tel]" id="contact_tel" class="form-control texto">
                      <div class="validacion"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>
                    Subject
                  </label>
                  <input type="text" aria-required="false" placeholder="Subject" name="contact[subject]" id="contact_subject" class="form-control texto">
                  <div class="validacion"></div>
                </div>
                <div class="form-group">
                  <label>
                    Message
                  </label>
                  <textarea aria-required="false" placeholder="Write your message here" name="contact[message]" id="contact_message" class="form-control" style="height: 150px;"></textarea>
                  <div class="validacion"></div>
                </div>
                <div class="form-group"></div>
                <div class="form-group">
                  <div id="contact-us-result" style="display: inline-table; width: 100%;"></div>
                </div>
                <button name="button" type="submit" class="btn btn-base fondo_accion"><i class="fa fa-envelope"></i> Send
                </button>
                <div id="resp_enviar"></div>
              </form>
            </div>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">
                <span></span>
              </div>
            </v-card-title>
            <v-card-text>
              <span></span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card class="elevation-0 transparent">
            <v-card-media height="300px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text" v-text="" />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Contact us</div>
            </v-card-title>
            <v-card-text>
              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
            </v-card-text>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="blue--text text--lighten-2">phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>777-867-5309</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="blue--text text--lighten-2">place</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Chicago, US</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="blue--text text--lighten-2">email</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
export default {
  props: [],
}

</script>
