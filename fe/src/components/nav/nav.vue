<template>
    <div>
    <v-toolbar class="pa-5" color="transparent" flat
    app>
    <div>
    <v-img :src="require('../../assets/img/logo.png')" width="87" height="26"></v-img>
    </div>
    <v-spacer></v-spacer>
     <div>
      <router-link to="/works" class='sm-link sm-link_text sm-link8' data-sm-link-text="Works">
        <span class="sm-link__label">Works</span>
      </router-link>
     </div>
     <div class="pl-3">
      <router-link to="/about" class="sm-link sm-link_text sm-link8" data-sm-link-text="About">
        <span class="sm-link__label">About</span>
      </router-link>
    </div>
    <div class="pl-3">
        <router-link to="/contact" class="sm-link sm-link_text sm-link8" data-sm-link-text="Contact">
          <span class="sm-link__label">Contact</span>
        </router-link>
    </div>
  </v-toolbar>
    </div>
</template>
<script>
/* eslint-disable */ 
export default {
    
}
</script>
<style scoped>
.sm-link{
--uismLinkDisplay: var(--smLinkDisplay, inline-flex);
--uismLinkTextColor: var(--smLinkTextColor);
--uismLinkTextColorHover: var(--smLinkTextColorHover);

display: var(--uismLinkDisplay);
color: var(--uismLinkTextColor);
position: relative;
overflow: hidden;
font-size: 13px;
letter-spacing: 2px;
font-weight: 600;
text-decoration: none;
}

.sm-link__label{
  display: block;
  opacity: 0.7;
}

.sm-link_text::before{
  content: attr(data-sm-link-text);
color: var(--uismLinkTextColorHover);
  position: absolute;
}

.sm-link_text::before,
.sm-link_text .sm-link__label{
  transition-property: transform;
transition-timing-function: cubic-bezier(.86, .6, .08, 1.01);
transition-duration: .3s;
}

.sm-link_text:hover::before,
.sm-link_text:hover .sm-link__label{
transition-duration: .4s;
}

.sm-link8::before{
  left: 0;
  top: 0;
  transform: translate3d(0, 140%, 0);
}

.sm-link8 .sm-link__label,
.sm-link8:hover::before{
transform: translate3d(0, 0, 0);
}

.sm-link8:hover .sm-link__label{
transform: translate3d(0, -140%, 0);
}
.sm-link{
--smLinkTextColor: white;
--smLinkTextColorHover: white;
}
</style>