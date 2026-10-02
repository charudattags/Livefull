// Toolchain smoke test: proves Jest, ts-jest and strict TypeScript run in CI.
// Delete it once real tests exist.
describe('toolchain', () => {
  it('runs a strict TypeScript test', () => {
    const sum = (a: number, b: number): number => a + b;
    expect(sum(1, 2)).toBe(3);
  });
});
