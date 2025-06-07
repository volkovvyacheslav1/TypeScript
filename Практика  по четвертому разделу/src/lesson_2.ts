interface IUser {
    id: number;
    name: string;
    surname: string;
    readonly coins: number;
    age?: number;
    addCoin: (amount: number) => void;
    removeCoin: (amount: number) => void;
    getCoins: (amount: number) => string;
}

interface IUser {
    anyParameter: string;
}

const Ivan: IUser = {
    id: 1,
    name: "Ivan",
    surname: "Ivanov",
    coins: 5,
    age: 25,
    addCoin(amount) {
        this.coins += amount;
    },
    removeCoin(amount) {
        this.coins -= amount;
    },
    getCoins() {
        return `Количество монет ${this.coins}`;
    },
    anyParameter: "anyValue",
};

interface Children extends IUser {
    anyParameter2: string;
}

class AnyClass implements Children {
    id = 1;
    name = "Ivan";
    surname = "Ivanov";
    readonly coins: number = 5;
    age = 25;
    anyParameter = "anyValue";
    anyParameter2: string = "дополнительное свойство";

    private _coins: number = this.coins;

    addCoin(amount: number) {
        this._coins += amount;
    }
    removeCoin(amount: number) {
        this._coins -= amount;
    }
    getCoins() {
        return `Количество монет ${this._coins}`;
    }
}