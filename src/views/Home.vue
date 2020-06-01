<template>
    <div class="home">
        <site-header/>
        <tool-kit />
        <work-experience />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteHeader from '@/components/SiteHeader.vue';
    import ToolKit from '@/components/ToolKit.vue';
    import WorkExperience from '@/components/WorkExperience.vue';

    @Component({
        components: { SiteHeader, ToolKit, WorkExperience },
    })
    export default class Home extends Vue {
    }
</script>
