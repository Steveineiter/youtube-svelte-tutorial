export class MyState {
    value = $state(0);

    up() {
        this.value += 1;
    }
}

export function createState() {
    let value = $state(0);

    function up() {
        value += 1
    }

    // We only expose those 3 functions, aka up needs to be in here as well.
    return {
        // returns most up to date value. 
        get value() {
            return value;
        },
        set value(newValue) {
            value = newValue
        },
        up
    }
}