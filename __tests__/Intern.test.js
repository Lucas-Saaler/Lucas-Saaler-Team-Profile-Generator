const Intern = require("../lib/Intern")
describe("Intern", () => {
    describe("test Intern's properties", () => {
        it("test all properties", () => {
            const intern = new Intern('Jim', 1, 'jim@fakemail.com', 'OSU')

            expect(intern.name).toEqual('Jim')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('jim@fakemail.com')
            expect(intern.school).toEqual('OSU')

        })

    })

    describe("test Intern's methods", () => {
        it("test all methods", () => {
            const intern = new Intern('Stanley', 2, 'stanp@fakemail.com', 'OSU')
            expect(intern.getName()).toEqual('Stanley')
            expect(intern.getId()).toEqual(2)
            expect(intern.getEmail()).toEqual('stanp@fakemail.com')
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})