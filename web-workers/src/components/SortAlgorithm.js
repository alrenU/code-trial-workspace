import React from "react";
import { useWorker } from "@koale/useworker";

const containerFunction = () => {
    const numbers = [...Array(5000000)].map(e => ~~(Math.random() * 1000000));
    const sortNumbers = nums => nums.sort();

    sortNumbers(numbers);
    console.log("Inside containerFunction.");
}

const SortAlgorithm = () => {
    const [sortWorker] = useWorker(containerFunction);

    const generateNumbers = async () => {
      const result = await sortWorker();
      console.log(result);
    };

    return (
        <>
            <button onClick={generateNumbers}>Click to Sort the Algorithm</button>
        </>
    );
}

export default SortAlgorithm;