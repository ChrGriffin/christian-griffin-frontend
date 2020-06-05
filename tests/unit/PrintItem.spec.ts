import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Print from '@/interfaces/Print';
import PrintItem from '@/components/PrintItem.vue';

const print: Print = {
  title: 'A Shirt',
  url: 'https://ashirt.com',
  image: 'https://ashirt.com/image.jpg',
};

describe('PrintItem.vue', () => {

  const printItem = shallowMount(PrintItem, {
    propsData: { print },
  });

  it('displays print image', () => {
    expect(printItem.find('img').exists()).to.equal(true);
    expect(printItem.find('img').attributes().src).to.equal('https://ashirt.com/image.jpg');
  });

  it('links to the print url', () => {
    expect(printItem.find('a').exists()).to.equal(true);
    expect(printItem.find('a').attributes().href).to.equal('https://ashirt.com');
  });
});
