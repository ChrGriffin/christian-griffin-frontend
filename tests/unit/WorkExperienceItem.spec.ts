import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import WorkExperienceItem from '@/components/WorkExperienceItem.vue';
import Job from '@/interfaces/Job';

const job: Job = {
  company: 'Witcher School of the Wolf',
  url: 'https://witcher.rv',
  description: 'Hmm.',
  from: new Date('2012-01-01 00:00:00'),
  to: new Date('2012-12-31 11:59:59'),
};

describe('WorkExperienceItem.vue', () => {

  const workExperienceItem = shallowMount(WorkExperienceItem, {
    propsData: { job },
  });

  it('renders company name and job description', () => {
    expect(workExperienceItem.find('h4').exists()).to.equal(true);
    expect(workExperienceItem.find('h4').text()).to.equal('Witcher School of the Wolf');

    expect(workExperienceItem.find('p').exists()).to.equal(true);
    expect(workExperienceItem.find('p').text()).to.equal('Hmm.');
  });

  it('displays a human-friendly date range', () => {
    expect(workExperienceItem.find('h5').exists()).to.equal(true);
    expect(workExperienceItem.find('h5').text()).to.equal('January 2012 - December 2012');
  });

  it('displays the date range as being to the present if `to` is null', () => {
    const currentJob = Object.assign({}, job);
    currentJob.to = null;
    workExperienceItem.setProps({job: currentJob});

    expect(workExperienceItem.find('h5').text()).to.equal('January 2012 - Present');
  });

  it('links to the company url', () => {
    expect(workExperienceItem.find('a').exists()).to.equal(true);
    expect(workExperienceItem.find('a').attributes().href).to.equal('https://witcher.rv');
  });
});
