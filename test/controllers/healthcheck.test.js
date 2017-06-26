import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app';

describe('Healthcheck', () => {
  it('should return success', () => {
    const supertest = request(app);
    return supertest.get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).to.equal('Hello World!');
      });
  });
});
