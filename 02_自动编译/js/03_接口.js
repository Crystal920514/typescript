// 接口：是一种约束
(function () {
    // 输出
    function showFullName(Person) {
        return Person.firstName + '_' + Person.lastName;
    }
    var person = {
        firstName: '鑫仔',
        lastName: '吃屁'
    };
    console.log(showFullName(person));
})();
