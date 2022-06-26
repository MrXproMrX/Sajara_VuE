<template>
    <section class="gallery__item">
          <div class="gallery__cart" v-for="(PhotoGallery,index) in PhotoGallerys" :key="index">
                 <router-link class="gallery__item__link" :to="PhotoGallery.link + PhotoGallery.id">
                     <div class="gallery__item__img">
                         <img :src="PhotoGallery.imges" :alt="PhotoGallery.imges + index">
                         <span><i class="fas fa-eye"></i></span>
                    </div>

                     <h2 class="gallery__item__title__h2">{{PhotoGallery.title}}</h2>
                 </router-link>

                 <div v-if="PhotoGallery.children" class="gallery__dropdown">
			            <ul class="gallery__itemdropdown">
					            <li v-for="child in PhotoGallery.children" :key="child.id">
						            <router-link class="gallery__itemdropdown_link" to="#!">
                                        <img :src="child.img" :alt="child.imges + child.id">
                                    </router-link>
					           </li>
				        </ul>
			    </div>
            </div>
    </section>
</template>

<script>
export default {
    props:['PhotoGallerys']
}
</script>