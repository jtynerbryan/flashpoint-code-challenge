# List the phases of the React component lifecycle #

### Lifecycle methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens. ###

### Mounting: An instance of a component is being created and inserted into the DOM ###
  lifecycle methods available:

  * componentWillMount()

  * componentDidMount()

### Updating: Updates are caused by changes to props or state ###
  lifecycle methods available:

  * componentWillReceiveProps()

  * shouldComponentUpdate()
    * used to let React know if a component’s output is not affected by the current change in state or props
    * returns true by default. if it returns false componentWillUpdate() and componentDidUpdate() won't be invoked
  * componentWillUpdate()

  * componentDidUpdate()

### Unmounting: A component is being removed from the DOM ###
  lifecycle methods available:

  * componentWillUnmount()
