import SortAlgorithm from "./SortAlgorithm";

const Content = () => {
    let workerObject;

    const startWebWorker = () => {
        if(typeof(Worker !== "undefined")) {
            workerObject = new Worker(SortAlgorithm);
            console.log("Buraya girdi.");
        }
    }

    const stopWebWorker = () => {
        workerObject.terminate();
        workerObject = undefined;
    }

    return (
        <>
            <SortAlgorithm />
            <button onClick={startWebWorker}>Start Worker</button>
            <button onClick={stopWebWorker}>Start Worker</button>
        </>
    );
}

export default Content;