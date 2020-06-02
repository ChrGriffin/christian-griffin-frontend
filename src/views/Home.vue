<template>
    <div class="home">
        <site-header/>
        <tool-kit />
        <work-experience />
        <about-me />
        <contact-me />
        <my-prints />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteHeader from '@/components/SiteHeader.vue';
    import ToolKit from '@/components/ToolKit.vue';
    import WorkExperience from '@/components/WorkExperience.vue';
    import AboutMe from '@/components/AboutMe.vue';
    import ContactMe from '@/components/ContactMe.vue';
    import MyPrints from '@/components/MyPrints.vue';

    @Component({
        components: { SiteHeader, ToolKit, WorkExperience, AboutMe, ContactMe, MyPrints },
    })
    export default class Home extends Vue {
    }
</script>
