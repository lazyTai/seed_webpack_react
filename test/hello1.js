var assert = require("assert");
var chai = require('chai'),
    expect = chai.expect;
var FormData = require('form-data');
var fs = require('fs')
const path = require('path')
/*file*/
var FileAPI = require('file-api')
    , File = FileAPI.File
    , FileList = FileAPI.FileList
    , FileReader = FileAPI.FileReader;


require('es6-promise').polyfill();
require('isomorphic-fetch');


function readImage() {
    return new Promise(function (resolve, reject) {
        fs.readFile('test/image.png', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

describe('test', function () {
    it("fetch", function (done) {
        var file = readImage().then(function (datafile) {
            var formData = new FormData();

            let filename = new Date().getTime();
            // formData.append('imageClass', 'twitterApp');
            // formData.append('X-Requested-With', 'Iframe')
            // formData.append('X-HTTP-Accept', 'application/json, text/javascript, */*; q=0.01')
            formData.append('content-Type', 'multipart/form-data')
            formData.append('enctype', 'multipart/form-data')
            formData.append('file', datafile, 'asd');
            fetch('http://localhost:3003/api/details/upload',
                {
                    method: 'post',
                    body: formData,
                }).then(function (res) {
                console.log(res)
                return res.json()
            }).then(function (res) {
                debugger
                expect(res)
                done()
            }).catch((e) => {
                console.error(e)
                done()
            })
        })

    })
})
;