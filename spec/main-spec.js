const main = require('../main/main');

describe('taxi fee', function () {
    it('the taxi fee when have mile and waitTime ', function () {
        let miles = 2;
        let waitTime = 0;

        let result = main(miles, waitTime).trim();
        let expected ='公里数：2公里，等待时间：0分钟，共花费：6元\n'
        expect(result).toEqual(expected)
    });
    it('the taxi fee when have mile and waitTime ', function () {
        let miles = 3;
        let waitTime = 1;

        let result = main(miles, waitTime).trim();
        let expected ='公里数：3公里，等待时间：1分钟，共花费：7元\n'
        expect(result).toEqual(expected)
    });
    it('the taxi fee when have mile and waitTime ', function () {
        let miles = 20;
        let waitTime = 0;

        let result = main(miles, waitTime).trim();
        let expected ='公里数：3公里，等待时间：0分钟，共花费：25元\n'
        expect(result).toEqual(expected)
    });


});
