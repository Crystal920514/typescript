(function () {
    // 类
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + '' + lastName;
        }
        return Person;
    }());
    var person = new Person('鑫仔', '睡大觉');
    function showName(person) {
        return person.firstName + person.lastName;
    }
    console.log(person);
    console.log(showName(person));
})();
