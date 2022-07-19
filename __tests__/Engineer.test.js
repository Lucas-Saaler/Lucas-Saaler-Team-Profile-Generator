const Engineer = require("../lib/Engineer")
describe("Engineer", () => {
    describe("test Engineer's properties", () => {
        it("test all properties", () => {
            const engineer = new Engineer('Bob', 1, 'bob@fakemail.com', 'bobsrepos', 'www.google.com')

            expect(engineer.name).toEqual('Bob')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('bob@fakemail.com')
            expect(engineer.gitHub).toEqual('bobsrepos')
            expect(engineer.link).toEqual('www.google.com')

        })

    })

    describe("test Engineer's methods", () => {
        it("test all methods", () => {
            const engineer = new Engineer('Jeff', 2, 'jeff@fakemail.com', 'bobsrepos')
            expect(engineer.getName()).toEqual('Jeff')
            expect(engineer.getId()).toEqual(2)
            expect(engineer.getEmail()).toEqual('jeff@fakemail.com')
            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})