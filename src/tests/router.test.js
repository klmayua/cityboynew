import { useRouterStore } from '../../store/routerStore'

describe('router store', () => {
  it('should have default space', () => {
    const state = useRouterStore.getState()
    expect(state.activeSpace).toBe('overview')
  })

  it('should change space', () => {
    const { go } = useRouterStore.getState()
    go('capital')
    expect(useRouterStore.getState().activeSpace).toBe('capital')
  })

  it('should have all spaces', () => {
    const { spaces } = useRouterStore.getState()
    expect(spaces).toContain('overview')
    expect(spaces).toContain('admin')
  })
})