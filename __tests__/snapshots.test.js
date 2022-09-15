import request from 'supertest';
import app from '../jimmytheapp.js';

describe('Snapshots', () => {
  it('Landing Page', async () => {
    const { text } = await request(app).get('/');
    
    expect(text).toMatchSnapshot();
  })

  it('Login', async () => {
    const { text } = await request(app).get('/jimmythelogin.html');
    
    expect(text).toMatchSnapshot();
  })

  it('Register', async () => {
    const { text } = await request(app).get('/jimmytheregistration.html');
    
    expect(text).toMatchSnapshot();
  })
})
