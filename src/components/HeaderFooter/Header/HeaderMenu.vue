<template>
    <section>
        <ul class="header__menu">
             <li v-for="(HeaderMenu,index) in HeaderMenus" :key="index">
                 <router-link class="header__menu__link" :to="HeaderMenu.link">{{HeaderMenu.title}}</router-link>

                 <div v-if="HeaderMenu.children" class="dropdown">
			            <ul class="header__dropdown">
					            <li v-for="child in HeaderMenu.children" :key="child.id">
						            <router-link class="header__dropdown_link" :to="child.link">{{ child.title }}</router-link>
					           </li>
				        </ul>
			    </div>
             </li>
        </ul>
    </section>
</template>

<script>
export default {
    props:['HeaderMenus']
}
</script>