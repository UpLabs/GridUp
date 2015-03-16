# GridUp
Extensible LESS Framework for Custom Grids and Breakpoints

## What GridUp is
* GridUp is a LESS Framework.
* GridUp allows you to easily create and use custom breakpoints.
* GridUp allows you to adjust how many columns you want to use.

## What GridUp is not
* GridUp is not a library for creating buttons, styling forms, or designing navbars.
* GridUp is not a complete solution. This project was started to provide you a customizable and extensible base for your grids with helpers that intertwine with your grids.

If you require any of the above, you might want to suck it up or use [Bootstrap](https://github.com/twbs/bootstrap).

# Getting started

## Install with Bower (recommended)

```bash
$ bower install gridup --save
```

## Use the CDN

```html
<link href="https://maxcdn.com/gridup/build/gridup.css" .../>
```

The CDN also has a minified equivalent for production use called `gridup.min.css`

## Download the compiled source
You can download the compiled source from [our GitHub Releases](https://github.com/UpLabs/GridUp/releases).

# Basic Usage

## Import with LESS
```less
@import bower_components/gridup/less/config.less;
@import bower_components/gridup/less/gridup.less;
```

The above uses our [default configuration](https://github.com/UpLabs/GridUp/blob/master/config.less). With that, you have a complete set up and can start using your brand new grid system.

Why two files? Well, in case you want to add your own configuration instead! See below...

# Configuration

## Breakpoints

```less
// Default
@breakpoints: xs 0, sm 48em, md 62em, lg 75em;
```

This variable has two parts to it:
1. Comma separate list of breakpoint pairs
2. Each breakpoint pair consists of a name and size (`min-width` for media query activation)

> You may notice that the first breakpoint pair (by default) has a size of 0. This is used to serve small screens and browsers with no media query support. Although GridUp does not officially support browsers with no media query support, that doesn't mean your site can't at least attempt to look good for them...

You can change the names and size of each breakpoint pair, as well as the number of breakpoint pairs you want to have.

### Sample Usage
```less
@breakpoints: cheese 0, mice 46rem, cats 60em, dogs 1200pt, humans 1500px;
```

```html
<div class="cheese-col-12 mice-col-6 humans-col-3">Grid Master</div>
```

## Column Count

```less
// Default
@columns: 12;
```

Pretty self-explanatory, but this is the number of columns your grid system will have. Change it to a 10-column or a 3-column layout if you want. GridUp will automatically adjust!

## (Un)Prefixing the First Breakpoint

You have the choice of having the first breakpoint prefixed, not prefixed, or both. By default, this is the `xs` breakpoint.

### Prefixed

```less
@prefixFirst: true;
```

```html
<div class="xs-col-12 xs-text-left sm-col-6 sm-text-center">Hello</div>
<div class="xs-col-12 xs-text-right sm-col-6 sm-text-center">World</div>
```

### Un-prefixed

```less
@prefixFirst: false;
```

```html
<div class="col-12 text-left sm-col-6 sm-text-center">Hello</div>
<div class="col-12 text-right sm-col-6 sm-text-center">World</div>
```

### Both Prefixed and Un-prefixed

```less
@prefixFirst: both;
```

```html
<div class="col-12 text-left sm-col-6 sm-text-center">Hello</div>
<div class="xs-col-12 xs-text-right sm-col-6 sm-text-center">World</div>
```

To restate, this only affects your very first breakpoint pair. All other breakpoints will be prefixed according to the respective breakpoint pair name.

This affects all modules being utilized with GridUp, including, but not limited to columns, text alignment, display, visibility, floats, and more.

## Gutters

```less
// default (1.6% on either side of the column)
@gutter: 3.2%;
```

Space between columns. By default, no gutters are given. You must add the `.gutter` class to the columns parent (aka `.col-group` element).

```html
<div class="col-group">
	<div class="col-6">No</div>
	<div class="col-6">Gutters</div>
</div>

<div class="col-group gutter">
	<!-- 1.6% (left) -->
	<div class="col-6">With</div>
	<!-- 1.6% (right) -->
	<!-- 1.6% (left) -->
	<div class="col-6">Gutters</div>
	<!-- 1.6% (right) -->
</div>
```

## Modules

Each module can be enabled/disabled to make sure GridUp leaves a minimal footprint by disabling modules that you do not use. Exact configuration variables will be explained below.

# Modules

## Offsets

```less
// default
@enableOffsets: true;
```

```html
<div class="col-12 md-col-6 md-col-offset-3"></div>
```

> On smaller screens, show full-width. On medium screens and larger, show 50% (6 columns) and centered (offset by 3 columns).

## Push / Pull

```less
// default
@enablePush: true;
@enablePull: true;
```

```html
<div class="col-12 md-col-6 md-col-push-6">Navigation (right side bar)</div>
<div class="col-12 md-col-6 md-col-pull-6">Main Content (left side)</div>
```

> On smaller screens, show navigation first, then main content. On medium screens and larger, main content first (to the left) and navigation to the right.

## Text Alignment

```less
// default
@enableTextAlign: true;
```

```html
<div class="text-right md-text-center lg-text-left">Where am I?</div>
```

> On smaller screens, show text to the right. On medium screens, show text centered. On larger screens, reset the alignment to the left.

## Floats

```less
// default
@enableFloats: true;
```

```html
<div class="float-left md-float-right lg-float-none">Float like a butterfly, sting like a bee.</div>
```

> On smaller screens, float to the left. On medium screens, float to the right. On larger screens, don't float.

## Display

```less
// default
@enableDisplay: true;
```

```html
<div class="hide sm-show md-hide lg-show">Boo! Did I scare you?</div>
```

> Hide on medium and really small screens; Show on small and large screens.

### Advanced Display

```less
// default
@enableAdvancedDisplay: true;
```

```html
<a href="#" class="display-block md-display-inline-block lg-display-inline">A trans-display link</a>
```

> On small screens, appear with `display: block;`. On medium screens, appear with `display: inline-block;`. On larger screens, appear with `display: inline;`.

## Visibility

```less
// default
@enableVisibility: true;
```

```html
<div class="hidden sm-visible md-hidden lg-visible">Boo! Did I scare you?</div>
```

> Hidden on medium and really small screens; Visible on small and large screens.

# Helpers

## Breakpoint Media Query

Can't remember your media query breakpoints? Don't worry, GridUp has it covered...

```less
.breakpoint(sm, {
	.blue {
		color: blue;
	}
});

.nested {
	.breakpoint(sm, {
		color: black;

		&.blue {
			color: blue;

			span {
				color: green;
			}
		}

		span {
			color: yellow;
		}
	});
}
```

## Custom Modules

```less
.do-grids({
	&color-blue { color: blue; }
	&color-white { color: white; }

	&bg- {
		&blue { background-color: blue }
		&white { background-color: white }
	}
});
```

```html
<div class="background-white md-bg-blue lg-bg-white">
	<div class="color-blue md-color-white lg-color-blue">Hello World</div>
</div>
```

# Notes and Recommendations

## Normalize / Reset

This package does not include [Normalize](https://github.com/necolas/normalize.css) nor [Reset](http://meyerweb.com/eric/tools/css/reset/index.html). It is recommended that you do include either of them. This package will not be affected by the inclusion (or exclusion) of either package. It is a mere suggestion.

## Box-Sizing (Border-Box)

It is also recommended to use `box-sizing: border-box;`. This is especially recommended if you're going to be using gutters. Here is a widely accepted version with great performance:

```css
html {
	box-sizing: border-box;
}

*, *:before, *:after {
	box-sizing: inherit;
}
```

## Versioning

GridUp adheres to the [Semantic Versioning (2.0.0) guidelines](http://semver.org/).
