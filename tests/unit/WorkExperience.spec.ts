import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Job from '@/interfaces/Job';
import WorkExperience from '@/components/WorkExperience.vue';
import WorkExperienceItem from '@/components/WorkExperienceItem.vue';
import flushPromises from 'flush-promises';

const localVue = createLocalVue();
localVue.directive('match-heights', () => { /**/ });

class FakeRepository {
  public get(): Promise<Job[]> {
    return new Promise((resolve) => {
      resolve([
        {
          company: 'Witcher School of the Wolf',
          url: 'https://witcher.rv',
          description: 'Hmm.',
          from: new Date('2012-01-01 00:00:00'),
          to: new Date('2012-12-31 11:59:59'),
        },
        {
          company: 'The Lodge of Sorceresses',
          url: 'https://sorceresses.vb',
          description: 'F*ck.',
          from: new Date('2012-01-01 00:00:00'),
          to: new Date('2012-12-31 11:59:59'),
        },
      ]);
    });
  }
}

describe('WorkExperience.vue', () => {
  it('renders a list of all jobs returned by the repository', async () => {
    const workExperience = shallowMount(WorkExperience, {
      localVue,
      propsData: { workExperienceRepository: new FakeRepository() },
    });

    await flushPromises();

    expect(workExperience.find(WorkExperienceItem).exists()).to.equal(true);
    expect(workExperience.findAll(WorkExperienceItem).length).to.equal(2);
  });
});
