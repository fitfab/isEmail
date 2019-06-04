import isEmail from './index'

describe('Email Utility', ()=> {
    test('checks for a valid email', ()=> {
        expect(isEmail('me@mail.com')).toBe(true)
    })
    test('recognizes a malformed email', ()=>{
        expect(isEmail('me@mail')).toBe(false)
    })
})