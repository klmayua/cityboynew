import { useExecutionEngine } from '../../store/executionEngineStore'

describe('execution engine', () => {
  beforeEach(() => {
    useExecutionEngine.setState({ queue: [], running: null, completed: [], failed: [] })
  })

  it('should enqueue command', () => {
    const { enqueue } = useExecutionEngine.getState()
    enqueue({ title: 'Test Command', type: 'test' })
    const state = useExecutionEngine.getState()
    expect(state.queue.length).toBe(1)
    expect(state.queue[0].title).toBe('Test Command')
  })

  it('should start next command', () => {
    const { enqueue, startNext } = useExecutionEngine.getState()
    enqueue({ title: 'Test Command', type: 'test' })
    startNext()
    const state = useExecutionEngine.getState()
    expect(state.running).not.toBeNull()
    expect(state.running.status).toBe('running')
  })

  it('should complete running command', () => {
    const { enqueue, startNext, complete } = useExecutionEngine.getState()
    enqueue({ title: 'Test Command', type: 'test' })
    startNext()
    complete()
    const state = useExecutionEngine.getState()
    expect(state.completed.length).toBe(1)
    expect(state.running).toBeNull()
  })

  it('should fail command', () => {
    const { enqueue, startNext, fail } = useExecutionEngine.getState()
    enqueue({ title: 'Test Command', type: 'test' })
    startNext()
    fail('Test error')
    const state = useExecutionEngine.getState()
    expect(state.failed.length).toBe(1)
    expect(state.failed[0].error).toBe('Test error')
  })
})