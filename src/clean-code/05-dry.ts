type Size = '' | 'S' | 'M' | 'XL'
class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',


    ) { }

    isProductValid(): boolean {

        //dry applied.
        for (const key in this) {
            //hace referencia a las propiedades de la clase.
            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number>this[key]) <= 0) throw Error(`${key} is zero`);
                    break;
                default: throw Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

    toString() {
        //No dry
        // if (this.name.length <= 0) throw Error('name is empty');
        // if (this.price <= 0) throw Error('Price is zero');
        // if (this.size.length <= 0) throw Error('size is empty');

        if (!this.isProductValid) return;


        return `${this.name} (${this.price}), ${this.size}`
    }

}
(() => {
    const bluePants = new Product('Blue large pants');
    console.log(bluePants.toString());
})();

