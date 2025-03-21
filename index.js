// Code your solution in this file!
let companyName = 'Scuber';
describe('index.js', function () {
    describe('companyName', function () {
      it('is set as Scuber', function () {
        expect(companyName).to.equal('Scuber');
      });
  
      it('is defined as a const', function () {
        expect(js).to.match(/const companyName/, "Expected companyName to be a const");
      });
    });
  
    describe('mostProfitableNeighborhood', function () {
      it('is declared as equal to Chelsea', function () {
        expect(mostProfitableNeighborhood).to.equal('Chelsea');
      });
  
      it('is defined using let', function () {
        expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
      });
    });
  
    describe('companyCeo', function () {
      it('is declared as equal to Susan Smith', function () {
        expect(companyCeo).to.equal('Susan Smith');
      });
  
      it('is defined using let', function () {
        expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
      });
    });
  });
  
  const mostProfitableNeighborhood = "Chelsea";
  const companyCeo = "Susan Smith";


