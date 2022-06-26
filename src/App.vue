<template>
  <div id="app"> 
    <HeaderTop></HeaderTop>
    <router-view/>
    <FooterBottom></FooterBottom>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderFooter/Header/HeaderTop.vue';
import FooterBottom from '@/components/HeaderFooter/Footer/FooterBottom.vue';
import Index from '@/components/Index.vue';
import loading from '@/components/Page404/loading.vue'

export default {
  components:{
    HeaderTop,
    FooterBottom,
    Index,
    loading
  },

  data(){
    return{
      loading:true
    }
  },

  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>