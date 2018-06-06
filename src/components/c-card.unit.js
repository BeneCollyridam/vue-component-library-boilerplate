import CCard from './c-card.vue';

describe('@/components/c-card.vue', () => {
  it('should export with name: "c-card"', () => {
    expect(CCard.name).toBe('c-card');
  });
});
