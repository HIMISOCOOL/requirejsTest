export class Thing {
    private privateThing() {
        console.log('this is private please dont touchg');
    }

    public publicThing() {
        console.log('hello world');
    }
}

export const func = (word: string) => `I said a ${word}, ${word}, ${word}... ${word} is the word`;