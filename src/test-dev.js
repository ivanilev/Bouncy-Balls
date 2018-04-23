//Testing purposes
var TestDev = (function() {
    function log(){
        if (process.env.NODE_ENV.trim() === 'development') {
            console.info('Running development environtment');
            //Code here 

        }
        else
        { 
            if (process.env.NODE_ENV.trim() === 'production'){
                console.info('Running production environtment');
            }
          //User shouldn't be seeing this
          console.error('Warning! Environment initialize crash!');
          console.trace();
        }
    };
    return {logEnvironment: log}
})();

export {TestDev};