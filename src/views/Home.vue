<template>
    <div class="home">
        <site-header/>
        <tool-kit />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteHeader from '@/components/SiteHeader.vue';
    import ToolKit from '@/components/ToolKit.vue';

    @Component({
        components: { ToolKit, SiteHeader },
    })
    export default class Home extends Vue {
    }
</script>
