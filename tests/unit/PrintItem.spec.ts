import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Print from '@/interfaces/Print';
import PrintItem from '@/components/PrintItem.vue';

const print: Print = {
  title: 'A Shirt',
  url: 'https://ashirt.com',
  image: 'https://ashirt.com/image.jpg',
  price: 19.99,
};

describe('PrintItem.vue', () => {

  const printItem = shallowMount(PrintItem, {
    propsData: { print },
  });

  it('renders print title and price', () => {
    expect(printItem.find('h4').exists()).to.equal(true);
    expect(printItem.find('h4').text()).to.equal('A Shirt');

    expect(printItem.find('h5').exists()).to.equal(true);
    expect(printItem.find('h5').text()).to.equal('$19.99 USD');
  });

  it('displays print image', () => {
    expect(printItem.find('img').exists()).to.equal(true);
    expect(printItem.find('img').attributes().src).to.equal('https://ashirt.com/image.jpg');
  });

  it('renders the price to two decimal places', () => {
    const integerPrint = Object.assign({}, print);
    integerPrint.price = 20;
    printItem.setProps({print: integerPrint});

    expect(printItem.find('h5').text()).to.equal('$20.00 USD');
  });

  it('links to the print url', () => {
    expect(printItem.find('a').exists()).to.equal(true);
    expect(printItem.find('a').attributes().href).to.equal('https://ashirt.com');
  });
});
