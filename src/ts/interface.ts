/**
 * Interface for listener function.
 * @interface
 */
export interface IEmitterCallBack {
  (...args: unknown[]): void;
}

/**
 * Interface for unsubscribing from an event.
 * @interface
 */
interface IEmitterUnsubscribe {
  unsubscribe(): void;
}

/**
 * Interface for the listener field.
 * @interface
 */
export interface IListeners {
  [key: string]: IEmitterCallBack;
}

/**
 * Interface for class Emitter.
 * @interface
 */
export interface IEventEmitter {
  /**
   * Synchronously calls each of the listeners registered for the event named eventName.
   * @param { string } eventName
   * @param { ...* } args - You can pass as many arguments as you like.
   * @return { void } - This method returns nothing.
   */
  emit(eventName: string, ...args: unknown[]): void;

  /**
   * Adds the listener function to the end of the listeners array for the event named eventName.
   * @param { string } eventName - name of events to subscribe.
   * @param { IEmitterCallBack } cb - listener function.
   * @return { IEmitterUnsubscribe } - Will return an object that has an unsubscribe
   * method with which you can unsubscribe from an event.
   */
  subscribe(eventName: string, cb: IEmitterCallBack): IEmitterUnsubscribe;
}
