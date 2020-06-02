import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Print from '@/interfaces/Print';
import MyPrints from '@/components/MyPrints.vue';
import PrintItem from '@/components/PrintItem.vue';

const localVue = createLocalVue();
localVue.directive('match-heights', () => { /**/ });

class FakeRepository {
  public get(): Promise<Print[]> {
    return new Promise((resolve) => {
      resolve([
        {
          title: 'A Shirt',
          url: 'https://ashirt.com',
          image: 'https://ashirt.com/image.jpg',
          price: 19.99,
        },
        {
          title: 'Another Shirt',
          url: 'https://anothershirt.com',
          image: 'https://anothershirt.com/image.jpg',
          price: 20,
        },
      ]);
    });
  }
}

describe('MyPrints.vue', () => {
  it('renders a list of all prints returned by the repository', async () => {
    const myPrints = shallowMount(MyPrints, {
      localVue,
      propsData: { printRepository: new FakeRepository() },
    });

    await flushPromises();

    expect(myPrints.find(PrintItem).exists()).to.equal(true);
    expect(myPrints.findAll(PrintItem).length).to.equal(2);
  });
});
