import CButton from './c-button.vue';

describe('@/components/c-button.vue', () => {
  it('should export with name: "c-button"', () => {
    expect(CButton.name).toBe('c-button');
  });
});
