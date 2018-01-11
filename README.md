# List the phases of the React component lifecycle

### Mounting: An instance of a component is being created and inserted into the DOM

lifecycle methods available:

* componentWillMount()

* componentDidMount()

### Updating: Updates are caused by changes to props or state

lifecycle methods available:

* componentWillReceiveProps()

* shouldComponentUpdate()
  * used to let React know if a component’s output is not affected by the current change in state or props
  * returns true by default. if it returns false componentWillUpdate() and componentDidUpdate() won't be invoked
* componentWillUpdate()

* componentDidUpdate()

### Unmounting: A component is being removed from the DOM

lifecycle methods available:

* componentWillUnmount()

### Lifecycle methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

# Redux

## Explain the role of the Reducer

### The job of Reducers in Redux is to specify how an application's state changes in response to Actions, which describe something happening.

## Notes on the Reddit Exercise

I found a few things in the instructions confusing but did my best to get as close to what you were asking for. I wasn't sure where points for topics were supposed to come from, so I ended up sorting them by aggregating the subscriber count of relevant subbreddits per topic. Sorting Subreddits by upvote/downvote stumped me because to my knowledge only posts have that data. So I sorted Subreddits withing topics by their subscriber count. Lastly, I just ran out of time and wasn't able to implement the text field autocomplete/ adding a topic. I was able to deplot to heroku so you can see my working example easily https://reddit-code-challenge.herokuapp.com/topics
