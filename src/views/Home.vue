<template>
    <div class="home">
        <site-header/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteHeader from '@/components/SiteHeader.vue';

    @Component({
        components: {
            SiteHeader,
        },
    })
    export default class Home extends Vue {
    }
</script>
