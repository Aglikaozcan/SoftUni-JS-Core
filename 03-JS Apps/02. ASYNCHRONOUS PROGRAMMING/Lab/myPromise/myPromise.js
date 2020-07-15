class MyPromise {
    constructor(executor) {
        this._resolveCallback = {};
        this._rejectCallback = {};

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);

        executor(this.resolve, this.reject);
    }

    then(successsFunc) {
        this._resolveCallback = successsFunc;
        return this;
    }

    catch(errorFunc) {
        this._rejectCallback = errorFunc;
        return this;
    }

    resolve(data) {
        this._resolveCallback(data);
    }

    reject(data) {
        this._rejectCallback(data);
    }    
}