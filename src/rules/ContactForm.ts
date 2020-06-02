export default class ContactForm {
    public name: object = {
        presence: true,
        length: {
            minimum: 1,
        },
    };

    public email: object = {
        presence: true,
        email: true,
    };

    public message: object = {
        presence: true,
        length: {
            minimum: 1,
        },
    };
}
