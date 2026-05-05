async function fetchData() {
    const url = "https://path_to_large_file.mp4";

    try {
        const response = await fetch(url, { signal: AbortSignal.timeout(1000) });
        const data = await response.json();

        return data;
    } catch (err: any) {
        if (err.name === "TimeoutError") {
    // This exception is from the abort signal
        console.error("Timeout: It took more than 5 seconds to get the result!");
    } else if (err.name === "AbortError") {
        // This exception is from the fetch itself
        console.error(
        "Fetch aborted by user action (browser stop button, closing tab, etc.",
        );
    } else if (err.name === "TypeError") {
        console.error("AbortSignal.timeout() method is not supported");
    } else {
        // A network error, or some other problem.
        console.error(`Error: type: ${err.name}, message: ${err.message}`);
    }
    }
}

async function getDataGithub() {
    try {
        const result = await fetchData();
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

console.log(getDataGithub())