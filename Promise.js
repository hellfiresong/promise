/**
 * Build Your Own Promise.
 * A lightweighted library
 * I think if you want to build your own promise, the main part is to maintain a state machine, you should know how to transform state between pending,
 * fulfilled and rejected.
 *
 * Promise standard:
 *     Promise/A+
 *     
 * Reference: 
 *     H5 rocks promise tutorials(http://www.html5rocks.com/en/tutorials/es6/promises/)
 *     Open source Promise/A+ standard(https://promisesaplus.com/)
 *     ECMAScript language specification ECMA-262 6th edition promise part(http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects).
 *
 * Realize step:
 *     How to realize resolve, reject, then base on https://github.com/promises-aplus/promises-spec
 *
 * Features that the library contains:
 *     parallel promise
 *
 * Support: 
 *     Both Browser and Node.js environment.
 *
 * To do...
 *     I will use mocha to write some case later.
 *
 *
 * hellfire (asyncloading#163.com)
 * Jan 28th, 2016
 */

(function(root) {

  /* Some utilities function. */

  /* Noop function. */
  var noop = function() {};

  /* Check a value is an array or not. */
  var isArray = function(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  
  /* If obj is thenable or not */
  var isThenable = function(obj) {
    return obj && typeof obj.then === 'function';
  };



  /* Promise three kinds of state */
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;


  /**
   * Promise constructor
   * Maintain a state machine.
   *
   * Notes:
   *    1,  Any promise object is in one of three mutually states: fulfilled, rejected and pending.
   *    2,  Pending state can transform to fulfilled or rejected state.
   *    3,  State can't transform between fulfilled and rejected.
   *    
   */
  function Promise(fn) {
    
    /*Ensure promise use new keywords to create */
    if (typeof this != object) {
      throw new TypeError("Promise must create use new");
    }
    if (typeof fn != function) {
      throw new TypeError("Param must be a function");
    }
    
    this._state = PENDING;              /* Promise state */
    this._value = undefined;            /* Return value */  
    this._deferreds = [];               /* Store success && failure handlers passed by then*/ 
  }

  function resolve(promise, x) {
    try {
      if (promise === x) {
        throw new TypeError("A promise can't resolve itself.");
      }
      if (typeof x === 'object' || typeof x === 'function') {
        var then = x.then; 
      }
    } catch(e) {
    
    }
  }

  function reject(self, x) {
  
  }


  /* Static Methods */
  Promise.all = function() {
  
  };

  Promise.resolve = function(value) {
  
  };

  Promise.reject = function(value) {
  
  };

  Promise.race = function(values) {
  
  }

  /* Prototype methods */

  
  /**
   * The then method.
   *
   * @param {onFulfilled}   optional arguments, must be function type. 
   * @param {onRejected}    optional arguments, must be function type.
   *
   * @return                a promise object.
   */
  Promise.prototype.then = function(onFulfilled, onRejected) {
    /* Arguments function type check */
    if (typeof onFulfilled !== 'function') {
      onFulfilled = null;
    }
    if (typeof onRejected !== 'function') {
      onRejected = null;
    }

    var promise = new Promise(noop);  
    
  };

  Promise.prototype.catch = function(onRejected) {
  
  };

  /* Browser and Node.js environment support. */
  if (typeof module !== 'undefined' && modue.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);
