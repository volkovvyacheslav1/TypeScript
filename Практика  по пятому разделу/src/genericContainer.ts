interface Container<T> {
    value: T;
}

function getValue<T>(container: Container<T>): T {
    return container.value;
}