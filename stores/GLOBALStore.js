'use strict'

var AppDispatcher = require('../dispatcher/AppDispatcher')
var createStore= require('../utils/StoreUtils').createStore
var ActionTypes = require('../constants/ActionTypes')

var _global_data = []
var _selected_indicator = null

function setSelectedIndicator(indicator) {
  _selected_indicator = indicator
}

var IndicatorStore = createStore({
  get() {
    return _global_data
  },

  getSelectedIndicator() {
    return _selected_indicator
  }
})

IndicatorStore.dispatchToken = AppDispatcher.register(function(payload) {

  var action = payload.action
  var response = action.response

  switch(payload.action.type) {
    case ActionTypes.REQUEST_INDICATOR_SUCCESS:
      _global_data = response
      break

    case ActionTypes.CHANGE_INDICATOR:
      setSelectedIndicator(response)
      break
  }

  IndicatorStore.emitChange()
})

module.exports = IndicatorStore