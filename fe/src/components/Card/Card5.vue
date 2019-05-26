<template>
  <v-layout align-center>
    <v-flex xs12>
          <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'text-1-1 mt-5 pt-5':'text-1'">
            <v-flex offset-xs1>
              Contact
            </v-flex>
          </div>
          <v-layout row wrap justify-start>
            <v-flex lg3 sm8 xs11 offset-xs1>
              <form class="py-5">
                <v-layout row wrap pa-3 justify-start>
                  <v-flex xs12>
                  <div class="text-2 text-xs-left">심플한 문의</div>
                  </v-flex>
                  <v-flex xs6>
                <v-text-field
                  v-model="name"
                  v-validate="'required|max:10'"
                  :counter="10"
                  :error-messages="errors.collect('name')"
                  label="담당자명"
                  data-vv-name="name"
                  required
                  color="white"
                  dark
                ></v-text-field>
                </v-flex>
                <v-flex xs5 offset-xs1>
                <v-text-field
                  v-model="number"
                  v-validate="'required|regex:^[0-9]+'"
                  :error-messages="errors.collect('number')"
                  label="연락처"
                  data-vv-name="number"
                  required
                  color="white"
                  dark
                ></v-text-field>
                </v-flex>
                <v-flex xs12>
                <v-text-field
                  v-model="email"
                  v-validate="'required|email'"
                  :error-messages="errors.collect('email')"
                  label="E-mail"
                  data-vv-name="email"
                  required
                  color="white"
                  dark
                ></v-text-field>
                </v-flex>
                    <v-flex xs12>
                      <div class="text-xs-right">
                    <v-btn @click="createcontact" flat class="white--text btn-1">문의</v-btn>
                    <v-btn @click="clear" flat class="white--text btn-1">다시 쓰기</v-btn>
                      </div>
                    </v-flex>
                </v-layout>
              </form>
            </v-flex>
            <v-flex lg3 sm8 xs11 offset-xs1>
              <div class="py-5">
                <div class="text-2 text-xs-left">빠른 문의</div>
                <v-layout justify-start>
                <div class="text-xs-left white--text title">
                  <div class="pt-5 text-3">
                    Tel : 053-248-8989
                  </div>
                  <div class="pt-5 text-3">
                    E.mail : db99136@naver.com
                  </div>
                </div>
                </v-layout>
              </div>
            </v-flex>
            <v-flex lg3 sm8 xs11 offset-lg0 offset-sm1 offset-xs1>
              <div class="py-5">
                <div class="text-2 text-xs-left">회사 소개</div>
                <div class="text-xs-left white--text title">
                  <div class="pt-5 text-3">
                    Company : PRTOECT
                  </div>
                  <div class="pt-5 text-3">
                    Licence No : 211-12-64382
                  </div>
                  <div class="pt-5 text-3">
                    Address : 대구시 수성로12길 84 203
                  </div>
                  <div class="pt-5 text-3">
                    Owner : 이규화
                  </div>
                </div>
              </div>
            </v-flex>
          </v-layout>
    </v-flex>
     <!-- ------------------스넥바--------------------- -->
                <div>
                  <v-snackbar
                  color="success"
                  v-model="snackbar"
                >
                  {{ sbMsg }}
                  <v-btn
                    color="pink"
                    flat
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </v-snackbar>
                </div>
  </v-layout>
</template>
<script>
/* eslint-disable */
import { CREATE_Contact_MUTATION } from '../../graphql/mutations'
export default {
 $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      snackbar: false,
      sbMsg:'',
      name: '',
      email: '',
      number:'',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => '성함을 입력해주세요.',
            max: '10자 이상이 넘으시면 안됩니다.'
            // custom messages
          },
          email: {
            required: () => '이메일을 입력해 주세요.',
            email: '이메일의 형식이 아닙니다.'
          },
          number: {
            required: () => '전화번호를 입력해 주세요.',
            regex: '숫자만 입력이 가능합니다.'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      createcontact () {
        this.$validator.validateAll()
        this.$apollo
          .mutate({
            mutation: CREATE_Contact_MUTATION,
            variables: {
              name:       this.name,
              email:      this.email,
              number:     this.number,
          },
          })
          .then(response => {
            this.pop('문의가 등록되었습니다.')
            this.$router.replace('/contact')
            this.clear()
          })
          .catch(error => console.error(error))
      },
      clear () {
        this.name = ''
        this.email = ''
        this.number = ''
        this.$validator.reset()
      },
      pop (msg) {
      this.snackbar = true
      this.sbMsg = msg
      }
    }
  }
</script>
<style scoped>
.btn-1{
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid white;
  font-size: 20px;
}
.text-1{
  font-family: 'Anton', sans-serif;
  color: white;
  font-size: 100px;
  letter-spacing: 20px;
}
.text-1-1{  
  font-family: 'Anton', sans-serif;
  color: white;
  font-size: 60px;
  letter-spacing: 15px;
}
.text-2{
  color: white;
  font-size: 30px;
  letter-spacing: 10px;
}
.text-3{
  text-decoration: underline;
  text-underline-position: under;
  letter-spacing: 3px;
}
</style>
