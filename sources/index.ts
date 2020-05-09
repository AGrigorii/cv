interface IUser {
    name: string;
}

export function f(user: IUser): any {
    document.body.innerText = `Hello, world! I'm ${user.name}`;
}

f({ name: 'Grigorii' });
