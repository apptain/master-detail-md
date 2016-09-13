import { expect } from 'chai'
import docReducers from '../../../imports/reducers/global/docReducers'
import actionTypes from '../../../imports/actionTypes/global/actionTypes.docs'
import reservationStubs from '../../../imports/stubs/reservationStubs'

describe('reducers.docs', function() {
	describe('default state:', function() {
   	it('initializes empty object for selected doc', function () {
			let action = { type: 'unknown' }
			let newState = docReducers(undefined , action)
			expect(newState.doc).to.deep.equal({})
  	})
		it('initializes empty array for docs', function () {
			let action = { type: 'unknown' }
			let newState = docReducers(undefined , action)
			expect(newState.docs).to.deep.equal([])
    })
	})
  describe('rest action reducers:',  function () {
    describe('select reducers',  function () {
      //request
      describe(actionTypes.docs.select.request, function () {
        let action =  {type: actionTypes.docs.select.request}
        let newState = docReducers(undefined, action)
        it("sets select request pending state to true", function () {
          expect(newState.docSelectPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.docs.select.success, function () {
        let reservationStub = reservationStubs.stub()
        let action = {
          type: actionTypes.docs.select.success,
          payload: reservationStub
        }
        let newState = docReducers(undefined, action)
        it('sets doc', function () {
          expect(newState.doc).to.deep.equal(reservationStub)
        })
        it("sets select request pending state to false", function () {
          expect(newState.docSelectPending).to.deep.equal(false)
        })
      })
      //failure
      describe(actionTypes.docs.select.failure, function () {
        let action = { type: actionTypes.docs.select.failure }
        let newState = docReducers(undefined, action)
        it("sets select request pending state to false", function () {
          expect(newState.docSelectPending).to.deep.equal(false)
        })
      })
    })
    describe('query reducers',  function () {
      //request
      describe(actionTypes.docs.query.request, function () {
        let action = { type: actionTypes.docs.query.request }
        let newState = docReducers(undefined, action)
        it("sets query request pending state to true", function () {
          expect(newState.docsQueryPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.docs.query.success, function () {
        let reservationStubArray = reservationStubs.stubs(5)
        let action = {
          type: actionTypes.docs.query.success,
          payload: reservationStubArray
        }
        let newState = docReducers(undefined, action)
        it('sets doc', function () {
          expect(newState.docs).to.deep.equal(reservationStubArray)
        })
        it("sets query request pending state to false", function () {
          expect(newState.docsQueryPending).to.deep.equal(false)
        })
      })
      //failure
      describe(actionTypes.docs.query.failure, function () {
        let action = { type: actionTypes.docs.change.failure }
        let newState = docReducers(undefined, action)
        it("sets query request pending state to true", function () {
          expect(newState.docsQueryPending).to.deep.equal(false)
        })
      })
    })
    describe('change reducers',  function () {
      //request
      describe(actionTypes.docs.change.request, function () {
        let action = { type: actionTypes.docs.change.request }
        let newState = docReducers(undefined, action)
        it("sets change request pending state to true", function () {
          expect(newState.docsChangePending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.docs.change.success, function () {
        let reservationStub = reservationStubs.stub()
        let action = {
          type: actionTypes.docs.change.success,
          payload: reservationStub
        }
        let newState = docReducers(undefined, action)
        it('sets doc', function () {
          expect(newState.doc).to.deep.equal(reservationStub)
        })
        it("sets change request pending state to false", function () {
          expect(newState.docsChangePending).to.deep.equal(false)
        })
      })
      //failure
      describe(actionTypes.docs.change.failure, function () {
        let action = { type: actionTypes.docs.change.failure }
        let newState = docReducers(undefined, action)
        it("sets change request pending state to true", function () {
          expect(newState.docsChangePending).to.deep.equal(false)
        })
      })
    })
  })
})

