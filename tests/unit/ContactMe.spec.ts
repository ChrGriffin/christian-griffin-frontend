import { expect } from 'chai';
import {shallowMount, Wrapper} from '@vue/test-utils';
import ContactMe from '@/components/ContactMe.vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';

const axiosMock = new MockAdapter(axios);

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
  wrapper.find('input[name="email"]').setValue(email);
  wrapper.find('textarea[name="message"]').setValue(message);

  return {name, email, message};
}

describe('WorkExperience.vue', () => {

  const contactMe = shallowMount(ContactMe);
  beforeEach(() => {
    axiosMock.reset();
  });

  it('renders a contact form', () => {
    expect(contactMe.find('input[name="name"]').exists()).to.equal(true);
    expect(contactMe.find('input[name="email"]').exists()).to.equal(true);
    expect(contactMe.find('textarea[name="message"]').exists()).to.equal(true);
  });

  it('posts to the app root when user clicks send button', async () => {
    axiosMock.onPost('/').replyOnce(200);

    const { name } = enterFormInfo(contactMe, validFields);
    contactMe.find('button').trigger('click');

    await flushPromises();

    expect(axiosMock.history.post.length).to.equal(1);
    expect(axiosMock.history.post[0].data).to.contain(encodeURI(`name=${name}`));
  });
});
