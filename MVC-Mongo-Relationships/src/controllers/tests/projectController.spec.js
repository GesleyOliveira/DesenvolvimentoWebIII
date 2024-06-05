const jestConfig = require('../../../jest.config')
const projectController = require('../projectController')

jest.mock('../projectController')

describe("Project Controller", ()=>{
    test("Should create a new project", ()=>{
        const req = {
            body:{
                title: 'Test',
                description: 'Project Description',
                assignedTo: 1234567
            }
        }
        const res = {
            status: jest.fn().mockReturnThis, 
            send: jest.fn()
        }
        projectController.create(req, res);
    
        expect(res.status).toHaveBeenCalledWith(201);
    })
})
    


