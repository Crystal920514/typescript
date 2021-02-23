(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string
    lastName: string
  }
  // 类
  class Person {
    firstName: string
    lastName: string
    fullName: string

    constructor (firstName:string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + '' + lastName
    }
  }

  let person = new Person ('鑫仔','睡大觉')
  function showName(person:IPerson) {
    return person.firstName + person.lastName
  }
  console.log(person)
  console.log(showName(person))
})()