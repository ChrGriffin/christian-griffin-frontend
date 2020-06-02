import { expect } from 'chai';
import {shallowMount, Wrapper} from '@vue/test-utils';
import ContactMe from '@/components/ContactMe.vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';

const axiosMock = new MockAdapter(axios);

const invalidFields = [
  {description: 'empty name', field: 'name', value: '', error: 'Name is required.'},
  {description: 'empty email', field: 'email', value: '', error: 'Email is required.'},
  {description: 'invalid email', field: 'email', value: 'not@nemail', error: 'Email is invalid.'},
  {description: 'empty message', field: 'message', value: '', error: 'Message is required.'},
];

const validFields = [
  {description: 'valid name', field: 'name', value: 'Geralt of Rivia'},
  {description: 'valid email', field: 'email', value: 'geralt@rivia.of'},
  {description: 'valid message', field: 'message', value: 'Wind\'s howling...'},
];

function enterFormInfo(wrapper: Wrapper<any>, datasets: any[]) {
  const name = datasets.filter((dataset) => dataset.field === 'name')[0].value;
  const email = datasets.filter((dataset) => dataset.field === 'email')[0].value;
  const message = datasets.filter((dataset) => dataset.field === 'message')[0].value;

  wrapper.find('input[name="name"]').setValue(name);
  wrapper.find('input[name="name"]').trigger('blur');

  wrapper.find('input[name="email"]').setValue(email);
  wrapper.find('input[name="email"]').trigger('blur');

  wrapper.find('textarea[name="message"]').setValue(message);
  wrapper.find('textarea[name="message"]').trigger('blur');

  return {name, email, message};
}

describe('WorkExperience.vue', () => {

  beforeEach(() => {
    axiosMock.reset();
  });

  it('renders a contact form', () => {
    const contactMe = shallowMount(ContactMe);
    expect(contactMe.find('input[name="name"]').exists()).to.equal(true);
    expect(contactMe.find('input[name="email"]').exists()).to.equal(true);
    expect(contactMe.find('textarea[name="message"]').exists()).to.equal(true);
  });

  invalidFields.forEach((dataset) => {
    it(`adds error class to invalid field on blur with dataset: ${dataset.description}`, () => {

      const contactMe = shallowMount(ContactMe);
      const formInput = contactMe.find(`[name="${dataset.field}"]`);
      const formLabel = contactMe.find(`label[for="contact-${dataset.field}"]`)
      expect(formInput.element.classList.contains('error')).to.equal(false);
      expect(formLabel.element.classList.contains('error')).to.equal(false);

      formInput.setValue(dataset.value);
      formInput.trigger('blur');
      expect(formInput.element.classList.contains('error')).to.equal(true);
      expect(formLabel.element.classList.contains('error')).to.equal(true);
    });
  });

  it('posts to the app root when user clicks send button', async () => {
    const contactMe = shallowMount(ContactMe);
    axiosMock.onPost('/').replyOnce(200);

    const { name } = enterFormInfo(contactMe, validFields);
    contactMe.find('button').trigger('click');

    await flushPromises();

    expect(axiosMock.history.post.length).to.equal(1);
    expect(axiosMock.history.post[0].data).to.contain(encodeURI(`name=${name}`));
  });
});
