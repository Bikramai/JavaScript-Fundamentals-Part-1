const person = {
    firstName: 'Bikram',
    lastName: 'Phurumbo',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Ayusha Phurumbo';

console.log(person);