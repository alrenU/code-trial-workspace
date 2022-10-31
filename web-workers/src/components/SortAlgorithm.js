const SortAlgorithm = () => {
    const sortNumbers = nums => nums.sort();

    const generateNumbers = () => {
        const numbers = [...Array(5000000)].map(e => ~~(Math.random() * 1000000));
        sortNumbers(numbers);
    }

    return (
        <>
            <button onClick={generateNumbers}>Click to Sort the Algorithm</button>
        </>
    );
}

export default SortAlgorithm;