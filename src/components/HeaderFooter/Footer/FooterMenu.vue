<template>
    <section>
        <ul class="footer__menu">
             <li v-for="(footerMenu,index) in footerMenus" :key="index">
                 <router-link class="footer__menu__link" :to="footerMenu.link">{{footerMenu.title}}</router-link>
             </li>
        </ul>
    </section>
</template>

<script>
export default {
    props:['footerMenus']
}
</script>