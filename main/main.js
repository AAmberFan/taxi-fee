module.exports = function main(miles, waitTime) {
    let summary = `公里数：${miles}公里，等待时间：${waitTime}分钟，`;
    let milePrice = calculateMilePrice(miles);
    let waitPrice = calculateWaitPrice(waitTime);
    let price = Math.round(milePrice+waitPrice);
    summary+=`共花费：${price}元\n`
    return summary;
};
function calculateMilePrice(miles) {
    let milePrice = 0;
    if(miles <=2 ){
        milePrice= isLess2Miles(miles);
    }else if(miles<=8){
        milePrice = isLess8Miles(miles)；
    }else{
        milePrice = isMoreThan8Miles(miles);
    }
}
function isLess2Miles(miles) {
    return 6;
}
function isLess8Miles(miles) {
    return 6 + (miles-2)*0.8;
}
function  isMoreThan8Miles(miles) {
    return 10.4 + (miles - 8)*0.8*1.5;
}
function calculateWaitPrice(waitTime){
    return waitTime*0.25;
}
