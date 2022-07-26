const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

const app = require('../src/app')

describe('GET /', () => {
    it('should get 200 status', async () => {
        const response = await request(app)
                            .get('/')
                            .then(response => response)
                            expect(response.status).to.equal(200)
        });
    it('should response "server on" in the body ', async () => {
        const response = await request(app)
                            .get('/')
                            .then(response => response)
                            expect(response.text).to.equal(`"Server on"`)
    });
    
    
});
describe('GET /text', () => {
    it('should response with the same inverted text', async () => {
        const text = 'Palindromo'
        const lowText = text.toLowerCase().replace(/[\W_]/g, '');
        const reverseText = lowText.split('').reverse().join('');
        const response = await request(app)
                                .get(`/text?text=${text}`)
                                .then(response => response)
                                expect(response._body.text).to.equal(reverseText)
                                expect(response.status).to.equal(200)
    });

    it('should response with Palindrome = true',async () => {
        const text = 'Anita lava la tina'
        const response = await request(app)
                                .get(`/text?text=${text}`)
                                .then(response => response)
                                expect(response._body.success).to.be.true
                                expect(response._body.palindrome).to.be.true
        
    });
    

    it('should get 400 status',async () => {
        const response = await request(app)
                                .get(`/text?text=9000`)
                                .then(response => response)
                                expect(response._body.error).to.equal("no text")
                                expect(response.status).to.equal(400)
    });
    
    
})
