const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
fs = require('fs')

var url = supertest("http://localhost:8080");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('Hook Test', function() {
      fs.readFile('./test/data.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
        assert.equal('admin@gmail.com', data);
      });
//       function readFiles('./webclient', onFileContent, onError) {
//   fs.readdir('./webclient', function(err, filenames) {
//     if (err) {
//       onError(err);
//       return;
//     }
//     filenames.forEach(function(filename) {
//       fs.readFile('./webclient/' + filename, 'utf-8', function(err, content) {
//         if (err) {
//           onError(err);
//           return;
//         }
//         if(content.includes("nitin@gmail.com"))
//         {
//           assert.equal(true, true);
//         }
//         // onFileContent(filename, content);
//       });
//     });
//   });
// }
    });
  });
});
// describe.only("Testing calculator POST route", function(err){
//   it("should add all the value of object", function(done){
//    url
//        .post("/restaurant/add")
//        .send("")
//        .expect(200)
//        .expect('Content-Type', /json/)
//        .end(function(err,res){
//          should.not.exist(err);
//          var myObj = JSON.parse(res.text);
//          myObj.name.should.be.equal("abcd");
//          myObj.id.should.be.equal("26");
//          myObj.location.should.be.equal("Bangalore");
//          done();
//        });
//    });
//
//  it("should update the required field", function(done){
//    url
//        .post("/restaurant/delete")
//        .send("")
//        .expect(200)
//        .end(function(err,res){
//          should.not.exist(err);
//          var myObj = JSON.parse(res.text);
//          myObj.id.should.be.equal("26");
//          // parseInt(res.text).should.equal("deleted successfully","Expected value not matching with response");
//          done();
//        });
//
// });
//  it("should delete the particular id", function(done){
//    url
//        .post("/restaurant/update")
//        .send("")
//        .expect(200)
//        .end(function(err,res){
//          should.not.exist(err);
//          var myObj = JSON.parse(res.text);
//          myObj.id.should.be.equal("26");
//          myObj.comments.should.be.equal("comment updated");
//          // parseInt(res.text).should.equal("updated successfully","Expected value not matching with response");
//          done();
//        });
//
// });
// });
