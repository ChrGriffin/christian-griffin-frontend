<template>
    <section>
        <div class="container flex">
            <div>
                <h3>Feel free to get in touch.</h3>
                <form>
                    <div class="flex">
                        <div>
                            <label for="contact-name">Name</label>
                            <input id="contact-name" name="name" type="text">
                        </div>

                        <div>
                            <label for="contact-email">Email</label>
                            <input id="contact-email" name="email" type="email">
                        </div>
                    </div>

                    <label for="contact-message">Message</label>
                    <textarea id="contact-message" name="message" rows="12"></textarea>

                    <div class="button-container">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class ContactMe extends Vue {
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        background-color: $darkGreyBlue;

        > .container > div {
            width: 50%;
        }
    }

    h3 {
        margin-bottom: 4rem;
    }

    form > div > div {
        width: 50%;
        flex: 1;

        &:first-child {
            padding-right: 1rem;
        }

        &:last-child {
            padding-left: 1rem;
        }
    }

    label {
        display: block;
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    input, textarea {
        display: block;
        width: calc(100% - 0.8rem);
        border: 0;
        font-size: 1.2rem;
        padding: 0.4rem;
        margin-bottom: 2rem;
        font-family: inherit;
    }

    .button-container {
        text-align: right;

        button {
            font-size: 1.2rem;
            padding: 0.4rem 1.8rem;
            background-color: $white;
            border: 0;
        }
    }
</style>
