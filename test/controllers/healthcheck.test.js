import app from '../../src/app';
import request from 'supertest';
import {expect} from 'chai';
describe('Healthcheck', ()=>{
  it('should return success', ()=>{
    let supertest = request(app);
    return supertest.get('/')
      .expect(200)
      .then(response => {
        expect(response.text).to.equal('Hello World!')
      })
  })
})