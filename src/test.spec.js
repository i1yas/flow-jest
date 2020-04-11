// Test file with flowtype annotations and JSX
const SampleComponent = () => <p>I am dummy component</p>;

const sampleFunction = <T>(a: T, b: T): [T, T] => {
    return [a, b];
}

test('sample test', () => {
    expect(sampleFunction(1, 2)).toMatchObject([1, 2])
})
