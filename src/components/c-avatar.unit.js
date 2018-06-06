import CAvatar from './c-avatar.vue';

describe('@/components/c-avatar.vue', () => {
  it('should export with name: "c-avatar"', () => {
    expect(CAvatar.name).toBe('c-avatar');
  });
});
