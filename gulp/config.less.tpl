//
// Prefix Style for the first breakpoint
//
// Possible values:
//  - `false`: No prefix (ie. `.col-*`)
//  - `true`: Prefix ONLY  (ie. `.xs-col-*`)
//  - `both`: Both prefix and no prefix  (ie. `.col-*, .xs-col-*`)
//
// Default: `false` - To minimize CSS footprint
//
@prefixFirst: {{prefixFirst}};

//
// Media Query Breakpoints
//
// Comma/Space separated list of breakpoint names and sizes, respectively
//
// Default:
//  - `xs` = 0em (0px)
//  - `sm` = 48em (768px)
//  - `md` = 62em (992px)
//  - `lg` = 75em (1200px)
//
@breakpoints: {{breakpoints}};

//
// Amount of Columns in your Grid
//
// Default: `12`
//
@columns: {{columns}};

//
// Spacing between columns
//
// Default: `3.2%`
//
@gutter: {{gutter}};

//
// Enable .col-offset-* alignment
//
@enableOffsets: {{enableOffsets}};

//
// Enable .col-push-* alignment
//
@enablePull: {{enablePull}};

//
// Enable .col-pull-* alignment
//
@enablePush: {{enablePush}};

//
// Enable .text-* text alignment
//
@enableTextAlign: {{enableTextAlign}};

//
// Enable .float-* text alignment
//
@enableFloats: {{enableFloats}};

//
// Enable .show and .hide helpers
//
@enableDisplay: {{enableDisplay}};

//
// Enable .display-block, .display-inline, .display-inline-block helpers
//
@enableAdvancedDisplay: {{enableAdvancedDisplay}};

//
// Enable .visible and .hidden helpers
//
@enableVisibility: {{enableVisibility}};
