// 接口：是一种约束
(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string
    lastName: string
  }
  // 输出
  function showFullName(Person: IPerson) {
    return Person.firstName + '_' + Person.lastName
  }
  const person = {
    firstName: '鑫仔',
    lastName: '吃屁'
  }
  console.log(showFullName(person))
})()