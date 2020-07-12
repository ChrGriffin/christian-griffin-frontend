<template>
    <section id="contact-me">
        <div class="container flex">
            <div>
                <h3>Feel free to get in touch.</h3>
                <form>
                    <div class="flex">
                        <div>
                            <label for="contact-name"
                                   :class="(this.errors.name.length > 0 ? 'error' : '')">
                                Name
                            </label>
                            <input v-model="name"
                                   @blur="validateField('name')"
                                   id="contact-name"
                                   :class="(this.errors.name.length > 0 ? 'error' : '')"
                                   name="name"
                                   type="text"/>
                        </div>

                        <div>
                            <label for="contact-email"
                                   :class="(this.errors.email.length > 0 ? 'error' : '')">
                                Email
                            </label>
                            <input v-model="email"
                                   @blur="validateField('email')"
                                   id="contact-email" name="email"
                                   :class="(this.errors.email.length > 0 ? 'error' : '')"
                                   type="email"/>
                        </div>
                    </div>

                    <label for="contact-message"
                           :class="(this.errors.message.length > 0 ? 'error' : '')">
                        Message
                    </label>
                    <textarea v-model="message"
                              @blur="validateField('message')"
                              id="contact-message"
                              :class="(this.errors.message.length > 0 ? 'error' : '')"
                              name="message"
                              rows="12">
                    </textarea>

                    <div class="button-container">
                        <button type="submit" @click="send" :disabled="disabled">Send</button>
                    </div>
                </form>
            </div>

            <div>
                <parallax>
                    <img :src="require('./../assets/images/contact_me.png')" />
                </parallax>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import axios from 'axios';
    import validate from 'validate.js';
    import ContactFormRules from '@/rules/ContactForm';
    import Parallax from '@/components/Parallax.vue';

    @Component({
        components: {Parallax},
    })
    export default class ContactMe extends Vue {

        public name: string = '';
        public email: string = '';
        public message: string = '';
        public disabled: boolean = true;
        private rules: ContactFormRules = new ContactFormRules();

        private errors = {
            name: [],
            email: [],
            message: [],
        };

        public validateField(field: keyof ContactFormRules): void {
            const errors = validate.single(this[field] as string, this.rules[field]);
            if (typeof errors === 'undefined') {
                this.errors[field] = [];
                this.enableOrDisableSubmission();
                return;
            }

            this.errors[field] = errors;
            this.enableOrDisableSubmission();
        }

        public send(): void {
            if (this.disabled) {
                return;
            }

            axios.post(
                '/',
                this.encode({
                    'form-name': 'contact',
                    'name': this.name,
                    'email': this.email,
                    'message': this.message,
                }),
                {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                },
            );
        }

        private enableOrDisableSubmission(): void {
            this.disabled = this.errors.name.length > 0
                || this.errors.email.length > 0
                || this.errors.message.length > 0;
        }

        private encode(data: any) {
            return Object.keys(data)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                .join('&');
        }
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        background-color: $darkGreyBlue;
        position: relative;
        overflow: hidden;

        > .container > div {
            width: 50%;
        }
    }

    .parallax-container {
        position: absolute;
        top: -20rem;
        left: 50%;

        img {
            width: 100%;
        }
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

        &.error {
            color: $red;
        }
    }

    input, textarea {
        display: block;
        width: calc(100% - 0.8rem - 6px);
        font-size: 1.2rem;
        padding: 0.4rem;
        margin-bottom: 2rem;
        font-family: inherit;
        border: 3px solid white;

        &.error {
            border: 3px solid $red;
        }
    }

    .button-container {
        text-align: right;

        button {
            font-size: 1.2rem;
            padding: 0.4rem 1.8rem;
            background-color: $white;
            border: 4px solid $white;
            color: $black;

            &:not([disabled]):hover {
                cursor: pointer;
                background-color: $darkGreyBlue;
                border-color: $white;
                color: $white;
            }

            &:disabled {
                background-color: $grey;
                border-color: $grey;
            }
        }
    }

    @media screen and (max-width: 1740px) {
        .parallax-container {
            right: 0;
        }
    }

    @media screen and (max-width: 1440px) {
        .parallax-container {
            right: -5rem;
        }
    }

    @media screen and (max-width: 1275px) {
        .parallax-container {
            right: 0;
        }
    }

    @media screen and (max-width: 1175px) {
        .parallax-container {
            right: -5rem;
        }
    }

    @media screen and (max-width: $mobileBreakpoint) {
        section > .container > div {
            width: 100%;
        }

        .parallax-container {
            display: none;
        }

        form > div > div {
            flex-basis: 100%;

            &:first-child {
                padding-right: 0;
            }

            &:last-child {
                padding-left: 0;
            }
        }
    }
</style>
