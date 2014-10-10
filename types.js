//  types.js
//
//
//
//
//------------------------------------------------------

//------------------------------------------------------
// Public
//------------------------------------------------------

var levels = {
  DEBUG:    1,
  INFO:     2,
  ERROR:    3,
  WARN:     4,
  FAIL:     5
};

var prefixes = {};
prefixes[levels.DEBUG  ]  =  "D";
prefixes[levels.INFO   ]  =  "I";
prefixes[levels.ERROR  ]  =  "E";
prefixes[levels.WARN   ]  =  "W";
prefixes[levels.FAIL   ]  =  "F";

//------------------------------------------------------
// Interface
//------------------------------------------------------

module.exports = {

  // logs are assigned a level to denote
  // levels of importance of criticality.
  levels: Object.freeze(levels),

  // Line prefixes provide easy visual markers
  // for human parsing and reading, along with
  // helping programmatic filtering.
  prefixes: Object.freeze(prefixes)

};
