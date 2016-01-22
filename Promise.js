/**
 * Build Your Own Promise.
 * A lightweighted library
 * For Promise standards, I follow ECMAScript language specification ECMA-262 6th edition(http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects).
 * Open source Promise/A+ standard(https://promisesaplus.com/)
 * Reference: (http://www.html5rocks.com/en/tutorials/es6/promises/).
 * How to realize resolve, reject, then base of https://github.com/promises-aplus/promises-spec
 *
 * Features that the library contains:
 *     parallel promise 
 * 
 * What I haven't done yet is test code, I will use mocha to write some case later.
 *
 * hellfire (asyncloading#163.com)
 * Jan 21st, 2016
 */

(function(root) {

  /* Helper */

  var noop = function() {};

  /* Check a value is an array or not. */
  var isArray = function(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  
  
  /* Check wether an object has then method. */
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
    this._deferreds = [];               /* Store success && failure handlers caused by then*/
 
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
  Promise.prototype.then = function(onFulfilled, onRejected) {
  
  };

  Promise.prototype.catch = function(onRejected) {
  
  };

})(this);
