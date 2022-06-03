let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")

    //the function is executed automatically when the promise is constructed

    //after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done", 1000));

    //after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// promise.then(
//     function(result) {/* handle a successful result */}
//     function(error) {/* handle an error */}
// )