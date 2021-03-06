webpackJsonp([5],{

/***/ 7:
/*!*************************!*\
  !*** ./demo5/demo5.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	// While composition is the best technique for using components
	// together, sometimes it's desirable to have cross-cutting concerns
	// that are shared between multiple components. React uses mixins
	// to solve this problem.
	
	// A mixin is simply an object that defines certain component
	// lifecycle hooks and properties. Here's a mixin we'll use
	// to reimplement the Timer demo.
	var SetIntervalMixin = {
	  // Many lifecycle hooks are automatically merged with the
	  // same hook defined in other mixins or the component itself.
	  componentWillMount:function() {
	    this.intervals = [];
	  },
	
	  // Mixins can also define other methods to make available
	  // to the component.
	  setInterval:function() {
	    this.intervals.push(setInterval.apply(null, arguments));
	  },
	
	  componentWillUnmount:function() {
	    this.intervals.forEach(clearInterval);
	  }
	};
	
	var Timer = React.createClass({displayName: 'Timer',
	  // Use a mixin by adding it to the `mixins` array for a component.
	  mixins: [SetIntervalMixin],
	
	  getInitialState:function() {
	    return {
	      time: 0
	    };
	  },
	
	  // Now we can use the mixin to set the interval without worrying
	  // about setting our own `componentWillUnmount` hook.
	  componentDidMount:function() {
	    this.setInterval(this.tick, 1000);
	  },
	
	  tick:function() {
	    this.setState({time: this.state.time + 1});
	  },
	
	  render:function() {
	    return React.createElement("div", null, "Time: ", this.state.time);
	  }
	});
	
	React.render(
	  React.createElement(Timer, null),
	  document.getElementById("container")
	);


/***/ },

/***/ 14:
/*!****************************************!*\
  !*** ./~/raw-loader!./demo5/demo5.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React = require(\"react\");\n\n// While composition is the best technique for using components\n// together, sometimes it's desirable to have cross-cutting concerns\n// that are shared between multiple components. React uses mixins\n// to solve this problem.\n\n// A mixin is simply an object that defines certain component\n// lifecycle hooks and properties. Here's a mixin we'll use\n// to reimplement the Timer demo.\nvar SetIntervalMixin = {\n  // Many lifecycle hooks are automatically merged with the\n  // same hook defined in other mixins or the component itself.\n  componentWillMount() {\n    this.intervals = [];\n  },\n\n  // Mixins can also define other methods to make available\n  // to the component.\n  setInterval() {\n    this.intervals.push(setInterval.apply(null, arguments));\n  },\n\n  componentWillUnmount() {\n    this.intervals.forEach(clearInterval);\n  }\n};\n\nvar Timer = React.createClass({\n  // Use a mixin by adding it to the `mixins` array for a component.\n  mixins: [SetIntervalMixin],\n\n  getInitialState() {\n    return {\n      time: 0\n    };\n  },\n\n  // Now we can use the mixin to set the interval without worrying\n  // about setting our own `componentWillUnmount` hook.\n  componentDidMount() {\n    this.setInterval(this.tick, 1000);\n  },\n\n  tick() {\n    this.setState({time: this.state.time + 1});\n  },\n\n  render() {\n    return <div>Time: {this.state.time}</div>;\n  }\n});\n\nReact.render(\n  <Timer />,\n  document.getElementById(\"container\")\n);\n"

/***/ }

});
//# sourceMappingURL=5.bundle.js.map