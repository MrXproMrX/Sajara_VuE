<template>
    <section>
        <ul class="news__pagination">
            
          <li class="news__pagination__item" v-if="page>1">
            <a class="news__pagination__link__arrow" @click.prevent="paginate(page -1)">
              <i class="fas fa-angle-double-left"></i>
            </a>
          </li>

          <li class="news__pagination__item" v-for="(pageNumber,index) in pages" :key="pageNumber+index">
            <a href="#!" class="news__pagination__link" @click.prevent="paginate(pageNumber)">
               {{pageNumber}}
            </a>
          </li>

          <li class="news__pagination__item" v-if="page<pages">
            <a class="news__pagination__link__arrow" href="#" @click.prevent="paginate(page+1)" >
              <i class="fas fa-angle-double-right"></i>
            </a>
          </li>

        </ul>
    </section>
</template>


<script>
export default {
    model:{
      prop:'page',
      event:'paginate',
    },
    props:['page', 'count', 'perPage'],
    computed:{
        pages(){
            return Math.ceil(this.count / this.perPage);
        }
    },

    methods:{
        paginate(page){
           this.$emit('paginate' , page);
        },        
    },
}

</script>