import CMessage from './c-message.vue';

describe('@/components/c-message.vue', () => {
  it('should export with name: "c-message"', () => {
    expect(CMessage.name).toBe('c-message');
  });
});
