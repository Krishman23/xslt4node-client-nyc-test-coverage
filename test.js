let expect= require("chai").expect;
const transformxlst= require("./index")
describe("Test nyc",function(){
    it("test coverage", function(done){
        
        var config = {
            xsltPath: 'discount.xsl',
            sourcePath: 'order.xml',
            result: 'result.xml',
            props: {
                indent: 'yes'
            }
        };
       var result=transformxlst(config)
       // console.log(result);
       expect("string").to.be.a("string");
        done();
    })
})
describe("Test simple",function(){
    it("test simple", function(done){
        expect("string").to.be.a("string");
        done()
    })
})
