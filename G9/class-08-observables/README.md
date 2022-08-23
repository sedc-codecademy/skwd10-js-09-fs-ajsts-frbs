## Observables

1. from
from converts various other objects and data types into Observables. It also converts a Promise, an array-like, or an iterable object into an Observable that emits the items in that promise, array, or iterable. A String, in this context, is treated as an array of characters. Observable-like objects (contains a function named with the ES2015 Symbol for Observable) can also be converted through this operator.
(Type the from example)

2. of
Unlike from, it does not do any flattening and emits each argument in whole as a separate next notification.
(Type the of example)

3. new Observable()


### Observers
What is an Observer? An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete.
Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.

Observers in RxJS may also be partial. If you don't provide one of the callbacks, the execution of the Observable will still happen normally, except some types of notifications will be ignored, because they don't have a corresponding callback in the Observer.

### Subjects
#### Subject
A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
Every Subject is an Observable. Given a Subject, you can subscribe to it, providing an Observer, which will start receiving values normally. From the perspective of the Observer, it cannot tell whether the Observable execution is coming from a plain unicast Observable or a Subject.
#### Behavior Subject
One of the variants of Subjects is the BehaviorSubject, which has a notion of "the current value". It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive the "current value" from the BehaviorSubject.

### Operators

1. Map
2. Filter
3. Take
4. TakeUntil
5. Tap