import {
  IListeners,
  IEventEmitter,
  IEmitterCallBack,
  IEmitterSubscriber,
} from './interface';

/**
 * Create a new instances EventEmitter.
 * @class
 * @implements { IEventEmitter }
 */
export class EventEmitter implements IEventEmitter {
  /**
   * All subscriptions are stored in this object.
   * @private
   */
  private listeners: IListeners = {};

  /**
   * Synchronously calls each of the listeners registered for the event named eventName.
   * @param { string } eventName.
   * @param { ...* } args - You can pass as many arguments as you like.
   * @public - This method is available to all instances of the  EventEmitter class.
   * @throws Throws an error if no listener has been registered for an event named eventName.
   * @return { void } - This method returns nothing.
   */
  public emit(eventName: string, ...args: unknown[]): void {
    if (!this.listeners[eventName]) {
      throw new Error(`this event "${eventName}" was not found.`);
    }

    this.listeners[eventName].forEach((listener: IEmitterCallBack): void => {
      listener(...args);
    });
  }

  /**
   * Adds the listener function to the end of the listeners array for the event named eventName.
   * @param { string } eventName - name of events to subscribe.
   * @param { IEmitterCallBack } cb - listener function.
   * @public - This method is available to all instances of the  EventEmitter class.
   * @return { IEmitterSubscriber } - Will return the subscriber object.
   * method with which you can unsubscribe from an event.
   */
  public subscribe(
    eventName: string,
    cb: IEmitterCallBack,
  ): IEmitterSubscriber {
    if (this.listeners[eventName]) {
      this.listeners[eventName].push(cb);
    } else {
      this.listeners[eventName] = [cb];
    }

    return {
      unsubscribe: (): void => {
        this.listeners[eventName] = this.listeners[eventName].filter(
          (listener: IEmitterCallBack) => listener !== cb,
        );
      },
    };
  }

  /**
   * This method returns a list of listeners.
   * @return {IListeners} - list of listeners.
   * @public - This method is available to all instances of the  EventEmitter class.
   */
  public getListeners(): IListeners {
    return this.listeners;
  }
}
