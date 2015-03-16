/*!
 * GridUp v{{version}} (https://github.com/UpLabs/GridUp)
 * Copyright 2015 UpLabs, LLC.
 * Licensed under MIT (https://github.com/UpLabs/GridUp/blob/master/LICENSE)
 */

@import "modules/columns.less";
@import "modules/display.less";
@import "modules/floats.less";
@import "modules/grids.less";
@import "modules/offsets.less";
@import "modules/pull.less";
@import "modules/push.less";
@import "modules/text-align.less";
@import "modules/visibility.less";

.col-group,
[class*="col-"] {
	&:before, &:after {
		content: " ";
		display: table;
	}

	&:after {
		clear: both;
	}
}

[class*="col-"] {
	float: left;
	min-height: 1px;
	position: relative;

	.gutter > & {
		box-sizing: border-box;
		padding: @gutter / 2;
	}
}

.do-grids({
	.do-columns();
	.do-offsets();
	.do-push();
	.do-pull();
	.do-text-align();
	.do-floats();
	.do-display();
	.do-visibility();
});
