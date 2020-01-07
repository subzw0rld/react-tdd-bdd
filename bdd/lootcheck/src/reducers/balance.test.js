import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;

        it('sets a balance', () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
        });

        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    it('deposits into a balance', () => {
        const deposit = 10;
        const initiaState = 5;

        expect(balanceReducer(initiaState, { type: constants.DEPOSIT, deposit })).toEqual(initiaState + deposit);
    });

    it('withdraws from balance', () => {
        const withdrawal = 10;
        const initiaState = 20;

        expect(balanceReducer(initiaState, { type: constants.WITHDRAW, withdrawal })).toEqual(initiaState - withdrawal);
    });
});