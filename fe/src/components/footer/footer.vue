<template>
    <div>
    <v-footer class="pa-5" color="transparent" flat
    app>
    <div>
      <router-link to="/blog" class='sm-link sm-link_text sm-link8' data-sm-link-text="Blog">
        <span class="sm-link__label">Blog</span>
      </router-link>
     </div>
    <v-spacer></v-spacer>
     <div class="white--text">&copy; {{ new Date().getFullYear() }} Protect WEB</div>
  </v-footer>
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