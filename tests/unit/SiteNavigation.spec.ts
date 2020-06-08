import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import SiteNavigation from '@/components/SiteNavigation.vue';

const localVue = createLocalVue();
localVue.directive('scroll-to', () => { /**/ });

describe('SiteNavigation.vue', () => {

  const navigation = shallowMount(SiteNavigation, { localVue });

  it('toggles the active class when the nav logo is clicked', () => {
    expect(navigation.find('nav').element.classList.contains('active')).to.equal(false);

    navigation.find('img').trigger('click');
    expect(navigation.find('nav').element.classList.contains('active')).to.equal(true);

    navigation.find('img').trigger('click');
    expect(navigation.find('nav').element.classList.contains('active')).to.equal(false);
  });
});
