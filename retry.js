class Retry{
    constructor({callBack, maxNumberOfAttempts}) {
        this.callBack = callBack;
        this.maxNumberOfAttempts = maxNumberOfAttempts;
    }
    onRetry() {
      return async() =>{
            let attempt = 0;
            let result;
            try {
                if(attempt >=  this.maxNumberOfAttempts ){
                    return;
                }
                result = await this.callBack();
                attempt++;
                return result
            } catch (err) {
                attempt++;
                const delay = this.maxNumberOfAttempts* 2;
                await new Promise( function(resolve, reject) {
                    resolve(setTimeout( this.callBack(), delay));
                    reject(new Error(err));
                })
            }
        }
    }
}

let retry = new Retry(()=> console.log('Hello word!'), 4);
retry.onRetry()