const Employee = require("../lib/Employee")
describe("Employee", () => {
    describe("test Employee's properties", () => {
        it("test all properties", () => {
            const employee = new Employee('Bob', 1, 'bob@fakemail.com')

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('bob@fakemail.com')

        })

    })

    describe("test Employee's methods", () => {
        it("test all methods", () => {
            const employee = new Employee('Lucas', 2, 'lucas@fakemail.com')
            expect(employee.getName()).toEqual('Lucas')
            expect(employee.getId()).toEqual(2)
            expect(employee.getEmail()).toEqual('lucas@fakemail.com')
            expect(employee.getRole()).toEqual('Employee')
        })
    })
})