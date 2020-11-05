import { EventEmitter } from '@/index';
import {
  IEventEmitter,
  IEmitterCallBack,
  IEmitterSubscriber,
} from '@/interface';

describe('Checking the methods of the EventEmitter class', () => {
  let emitter: IEventEmitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  describe('method check "emit"', () => {
    test('the method should return an error', () => {
      const eventName = 'non-existent event name';
      try {
        emitter.emit(eventName);
      } catch (error) {
        expect(error.message).toBe(`this event "${eventName}" was not found.`);
      }
    });

    test('checking the method for performance', () => {
      const eventName: string = 'test-event-name';
      const message: string = 'test-message';

      emitter.subscribe(eventName, (text) => {
        expect(text).toBe(message);
      });

      emitter.emit(eventName, message);
    });
  });

  describe('method check "subscribe"', () => {
    test('checking the possibility of subscription to events', () => {
      const eventName: string = 'test-event-name';
      const listener: IEmitterCallBack = () => {};

      const subscriber = emitter.subscribe(eventName, listener);

      expect(emitter.getListeners()[eventName]).toBeDefined();
      expect(subscriber).toBeDefined();
      expect(emitter.getListeners()[eventName][0]).toBe(listener);
    });

    test('checking the possibility of unsubscribing from events', () => {
      const eventName: string = 'test-event-name';
      const listener: IEmitterCallBack = () => {};

      const subscriber: IEmitterSubscriber = emitter.subscribe(
        eventName,
        listener,
      );
      expect(emitter.getListeners()[eventName]).toBeDefined();
      expect(subscriber).toBeDefined();
      expect(emitter.getListeners()[eventName][0]).toBe(listener);

      subscriber.unsubscribe();

      expect(emitter.getListeners()[eventName]).toBeDefined();
      expect(emitter.getListeners()[eventName][0]).toBeUndefined();
    });
  });
});
