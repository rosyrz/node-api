"use strict"
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

global.AssertionError = chai.AssertionError
global.expect = chai.expect
