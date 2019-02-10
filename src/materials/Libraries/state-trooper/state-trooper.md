---
path: '/materials/state-trooper'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'state-trooper'
  url: 'https://github.com/swipely/state-trooper'
  github_url: 'https://github.com/swipely/state-trooper'
  subscribers_count: '22'
  stargazers_count: '12'
  tags: ['']
  subtitle: 'Centrally manage state for React applications with CSP'
  clone_url: 'https://github.com/swipely/state-trooper.git'
  ssh_url: 'git@github.com:swipely/state-trooper.git'
  pushed_at: '2017-10-24T23:26:40Z'
  updated_at: '2018-12-27T00:22:42Z'
  author:
    name: 'swipely'
    avatar: 'https://avatars2.githubusercontent.com/u/58479?v=4'
    github_url: 'https://github.com/swipely'
  latestRelease:
    tag_name: 'v2.1.2'
    name: 'State Trooper 2.1.2'
    url: 'https://github.com/swipely/state-trooper/releases/tag/v2.1.2'
    created_at: '2017-08-29T18:58:45Z'
---
state trooper
=============

![](https://travis-ci.org/swipely/state-trooper.svg?branch=master)

# Example Usage

Call `StateTrooper.patrolRunLoop` in your route handler/main app entry point
```javascript

const config = {
  // describe the state for the page
  state: {
    serverReport: null,
    bio: null,
    activity: null
  },

  // describe the fetchers and persisters for each piece of state
  // fetchers and persisters are functions that should return channels
  dataStore: {
    'serverReport': { fetcher: serverReportFetcher },
    'bio': { fetcher: bioFetcher, persister: bioPersister },
    'activity': { fetcher: activityFetcher }
  }
};
const cursor = StateTrooper.patrolRunLoop(config, (cursor) => {
  // Re-render the component when state changes generate new cursors
  React.render(<Server cursor={cursor}/>, document.querySelector('body'));
});

// Render the component with the initial cursor
React.render(
  <Server cursor={cursor}/>,
  document.querySelector('body')
);

```

Using cursors inside of the components
```javascript
const Server = React.createClass({
  render: function () {
    return (
      <div>
        <ServerReport cursor={this.props.cursor.refine('serverReport')}/>
        <Bio cursor={this.props.cursor.refine('bio')}/>
      </div>
    );
  }
});

const Bio = React.createClass({
  render: function () {
    const bio = this.props.cursor.deref();

    if (bio) {
      return (
        <form>
          <label>Name</label>
          <input type='text' value={bio.name} onChange={this.handleChange}/>
          <button onClick={this.handleSaveClick}>Save</button>
        </form>
      );
    }
    else {
      return null;
    }
  },

  handleChange: function (ev) {
    this.props.cursor.set({ name: ev.target.value });
  },

  handleSaveClick: function () {
    this.props.cursor.persist();
  }
});
```

Fetchers will be called with a `cursor` and a `rootCursor`
Persisters will be called with a `cursor`, a `change` and a `rootCursor`

To have your fetchers or persisters change the state, simply use one of the
mutating functions of a cursor.

# How state changes are applied
State change are applied one after each other. Making a change will always
produce a new top level cursor with the update state.  However there are cases
where you can call request several mutate changes via any of the mutative
functions on a cursor (`set`, `replace`, `add`, `remove`) in short succession.
In cases like this the state changes might be requested before the first change
is propegated. StateTrooper ensures that the changes are applied sequentially
regardless of wether or not a new cursor has been added to the cursor chan yet.

# Cursor API:
Given this state:
```javascript
{
  foo: {
    bar: 'baz',
    beep: ['hey', 'yo']
  }
}
```

### cursor#refine
```javascript
cursor.refine('foo.bar');
```
Calling cursor#refine with a string path will create a new cursor for that part
of the state.  This is useful as you go down the component tree and the focus
your component and state on a specific domain.

### cursor#deref
```javascript
cursor.refine('foo').deref();
// or
cursor.deref('foo');
```
Calling cursor#deref returns the value at the refined location.
If a path is provided, the path will be used starting at the refined location.

### cursor#set
```javascript
cursor.refine('foo').set({ bar: 'foo' });
```
Calling cursor#set will merge the changes into the state at the path of the
cursor. Similar to reacts setState.
In this example the state change will result in:
```javascript
{
  foo: {
    bar: 'foo',
    beep: ['hey', 'yo']
  }
}
```
set is only available on Objects/Maps

### cursor#replace
```javascript
cursor.refine('foo').replace('bar');
```
Calling cursor#replace will replace the entire subtree at the path of the cursor
In this example the state change will result in:
```javascript
{
  foo: 'bar'
}
```

### cursor#remove
```javascript
cursor.refine('foo.beep.0').remove();
```
Calling cursor#remove will remove the entire subtree at the path of the cursor.
This works on both arrays and objects.
In this example the state change will result in:
```javascript
{
  foo: {
    bar: 'baz',
    beep: ['yo']
  }
}
```

### cursor#add
```javascript
cursor.refine('foo.beep').add('yo');
```
Calling cursor#add will push a new value on the end of the array held by the cursor.
In this example the state change will result in:
```javascript
{
  foo: {
    bar: 'baz',
    beep: ['hey', 'yo', 'yo']
  }
}
```
add is only available on `Array` values.

### cursor#equals
```javascript
this.state.cursor.equals(newState.cursor);
```
This method compares the state encapsulated by two cursors. If the cursors hold equivalent values,
based on the result of an `equals()` method, comparison by `Object.prototype.valueOf()`,
or comparison of key/value pairs on the object.
If you are a `React` user, this method can be useful for implementing `shouldComponentUpdate`.

# Monitoring Changes

StateTrooper also provides a mechanism for monitoring a piece of state and being notified when it changes.
These are called 'stakeouts'. These are useful when an application needs to respond to a change in one piece of state,
such as changing a user preference, and make further state changes.

### StateTrooper.stakeout
```javascript
StateTrooper.stakeout('activityReport', (update, cursor) => {
  // The `update` holds the new value and the action that caused the update
  // The `cursor` is the root cursor.
  if (update.value.somethingExcitingChanged) {
    fetch(myExcitingService)
      .then(response => response.json())
      .then(json => cursor.replace('myExcitingState', json));
  }
});
```

### StateTrooper.patrol
```javascript
  function handleActivityReportChange(update, cursor) {
    console.log('handleActivityReportChange', update);
  }

  const cursorChan = StateTrooper.patrol({
    // describe the state for the page
    state: {
      activity: null,
      activityReport: null
    },
    stakeout: {
      'activityReport': [handleActivityReportChange]
    }
  });

```

# API Changes

A major change in the 2.x release of state-trooper is the removal of `immutable-js` as the internal data structure for storing state.

The following APIs changed in v2.x:

- cursor#deref(): Values returned are not `immutable-js` Maps or Lists.
- cursor#derefJS(): *REMOVED*
- cursor#hasSameValue(): Renamed to `cursor#equals`.
- cursor#map(): *REMOVED*

- StateTrooper#stakeout(): *ADDED*
- StateTrooper#patrol(): The 'config' object supports a `stakeout` property.