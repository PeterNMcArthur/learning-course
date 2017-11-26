import { expect } from 'chai'
import { add, upper, even, getFullNames } from './index'

describe('lesson 1', () => {
    describe('upper()', () => {
        it('will uppercase arg', () => {
            expect(upper('kim')).to.be.equal('KIM')
        })
    })
    describe('add - adds an array of list items together e.g. add([1, 2, 3]) will output 6', () => {
        it('add([1, 2, 3]) will output 6', () => {
            expect(add([1, 2, 3])).to.be.equal(6)
        })
        it('add([1, 2, 3, 2]) will output 8', () => {
            expect(add([1, 2, 3, 2])).to.be.equal(8)
        })
    })
    describe('even - returns a new array of only even values', () => {
        it('even([1, 2, 3, 8]) will output [2]', () => {
            expect(even([1, 2, 3, 8])).to.be.eql([2, 8])
        })
        it('even([40, 2, 765, 1]) will output [40, 2]', () => {
            expect(even([40, 2, 765, 1])).to.be.eql([40, 2])
        })
    })
    describe('getFullNames', () => {
        const ppl = [
            {
                firstName: 'Peter',
                lastName: 'McArthur',
                age: 28
            },
            {
                firstName: 'Kimberley',
                lastName: 'Kelly',
                age: 24,
            }
        ]
        it('getFullNames(ppl)', () => {
            expect(getFullNames(ppl)).to.be.eql([
                {
                fullName: 'Peter McArthur',
                yearOfBith: 1989
            },
            {
                fullName: 'Kimberley Kelly',
                yearOfBith: 1993                
            }
            ])
        })
    })
})