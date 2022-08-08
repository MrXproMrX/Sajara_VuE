<template>
    <section>
        <ul>
            <li class="sajara__item" v-for="(sajara,index) in sajaras" :key="index">
               <h2 class="sajara__title__h2__item">{{sajara.title}}</h2>
               <div class="sajara__text__item">{{sajara.text}}</div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props:['sajaras']
}
</script>