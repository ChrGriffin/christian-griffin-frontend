import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Print from '@/interfaces/Print';
import MyPrints from '@/components/MyPrints.vue';
import PrintItem from '@/components/PrintItem.vue';

class FakeRepository {
  public get(): Promise<Print[]> {
    return new Promise((resolve) => {
      resolve([
        {
          title: 'A Shirt',
          url: 'https://ashirt.com',
          image: 'https://ashirt.com/image.jpg',
        },
        {
          title: 'Another Shirt',
          url: 'https://anothershirt.com',
          image: 'https://anothershirt.com/image.jpg',
        },
      ]);
    });
  }
}

describe('MyPrints.vue', () => {
  it('renders a list of all prints returned by the repository', async () => {
    const myPrints = shallowMount(MyPrints, {
      propsData: { printRepository: new FakeRepository() },
    });

    await flushPromises();

    expect(myPrints.find(PrintItem).exists()).to.equal(true);
    expect(myPrints.findAll(PrintItem).length).to.equal(2);
  });
});
