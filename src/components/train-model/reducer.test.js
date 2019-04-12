import modelTrainingReducer from './reducer';
import * as actions from './actions'
import moment from "moment";

describe('BrandItem reducer', () => {
    it('should return the initial state', () => {
       const expected = {items: []};
       const actual = modelTrainingReducer(undefined, {});

       expect(actual).toEqual(expected);
    });


    it('should give a date in september', () => {

      const expected = "Sep 30th 18";
      const dateAsString = "2018-09-30";
      const dateObj = new Date(dateAsString);
      const actual = moment(dateObj).format("MMM Do YY");

        expect(actual).toEqual(expected);
    });
});
