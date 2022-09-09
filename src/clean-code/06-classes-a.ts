
(() => {
    //No aplicando el Principio de responsabilidad unica. 

    type Gender = 'M' | 'F';
    class Person {
        //Opcion 1
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor(name: string, gender: Gender, birthdate: Date){
        //     this.name= name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }
        //Opcion 2 --> Mejor estructurada 
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,

        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'sac@hotmail.com',
        'Admin',
        'Santiago',
        'M',
        new Date('1999-10-06')

    );

    console.log({ userSettings });


    const newPerson = new Person('Santiago', 'M', new Date('1999-10-06'));
    console.log({ newPerson });

})();

