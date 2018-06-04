import CTextarea from './c-textarea.vue';

describe('@/components/c-textarea.vue', () => {
  it('should export with name: "c-textarea"', () => {
    expect(CTextarea.name).toBe('c-textarea');
  });
});
