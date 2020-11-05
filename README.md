# Observer pattern implementation in js.

## Installation.
```npm
npm i observer-pattern-js
```

# Usage example.
```ts
import {IEventEmitter, EventEmitter, IEmitterSubscriber} from "observer-pattern-js";

const emitter: IEventEmitter = new EventEmitter();

const subscriber: IEmitterSubscriber = emitter.subscribe(
  'event-name',
  (name, surname, age): void => {
    console.log(name); // Ikrom.
    console.log(surname); // Murodov.
    console.log(age); // 18.
  },
);

emitter.emit('event-name', 'Ikrom', 'Murodov', 18);

// If you want to unsubscribe from an event you can call the unsubscribe method.
subscriber.unsubscribe();
```

# EventEmitter (API).

### subscribe - Adds the listener function to the end of the listeners array for the event named eventName.

   * Adds the listener function to the end of the listeners array for the event named eventName.
   * @param { string } eventName - name of events to subscribe.
   * @param { IEmitterCallBack } cb - listener function.
   * @public - This method is available to all instances of the  EventEmitter class.
   * @return { IEmitterSubscriber } - Will return the subscriber object.
   * method with which you can unsubscribe from an event.

```ts
import {IEventEmitter, EventEmitter, IEmitterSubscriber} from "observer-pattern-js";

const emitter: IEventEmitter = new EventEmitter();

const subscriber: IEmitterSubscriber = emitter.subscribe('event-name', (...args) => {});
```


### emit - Synchronously calls each of the listeners registered for the event named eventName.

  * @param { string } eventName.
  * @param { ...* } args - You can pass as many arguments as you like.
  * @public - This method is available to all instances of the  EventEmitter class.
  * @throws Throws an error if no listener has been registered for an event named eventName.
  * @return { void } - This method returns nothing.

```ts
import {IEventEmitter, EventEmitter} from "observer-pattern-js";

const emitter: IEventEmitter = new EventEmitter();

emitter.emit('eventName', '...args');
```

### getListeners - This method returns a list of listeners.

  * @return { IListeners } - list of listeners
  * @public - This method is available to all instances of the  EventEmitter class.


```ts
import {IEventEmitter, EventEmitter, IListeners} from "observer-pattern-js";

const emitter: IEventEmitter = new EventEmitter();

const listeners: IListeners = emitter.getListeners();

console.log(listeners);
```
