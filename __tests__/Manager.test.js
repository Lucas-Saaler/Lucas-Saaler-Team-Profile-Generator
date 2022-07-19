const Manager = require("../lib/Manager")
describe("Manager", () => {
    describe("test Manager's properties", () => {
        it("test all properties", () => {
            const manager = new Manager('Scotty', 1, 'beammeup@fakemail.com', 1234)

            expect(manager.name).toEqual('Scotty')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('beammeup@fakemail.com')
            expect(manager.officeNumber).toEqual(1234)

        })

    })

    describe("test Manager's methods", () => {
        it("test all methods", () => {
            const manager = new Manager('Sean', 2, 'sean@fakemail.com', 1233)
            expect(manager.getName()).toEqual('Sean')
            expect(manager.getId()).toEqual(2)
            expect(manager.getEmail()).toEqual('sean@fakemail.com')
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})