# focusd

A jQuery plugin to mark focused elements on a page.

(c) 2013 Vincent Diep

Released under the MIT license (see LICENSE).

## Source

Hosted at GitHub: https://github.com/RinkAttendant6/focusd/tree/master

## Use Cases

This plugin was initially developed to partially mimic the functionality of the CSS pseudo-classes `:-moz-ui-valid` and `:-moz-ui-invalid`. These pseudo-classes are subsets of `:valid` and `:invalid` respectively, in which that they only apply to elements after they have been interacted with (e.g. focused on, or attempted to submit the form). The problem with using `:valid` and `:invalid` is that the styles apply on page render before the user has a chance to fill out/interact with the form elements.

The CSS3 module Selectors Level 4, currently in Working Draft status, includes a `:user-error` pseudo-class that functions similarly to `:-moz-ui-invalid`. As of September 2013, no major browsers support this pseudo-class.

With Focusd, styles can be applied to form elements (as well as other focusable elements) after focus has been received. Example:

    .focusd:valid {
        background-color: #d8ffd8;
        box-shadow: 0 0 8px #62ff62;
    }
    .focusd:invalid{
        background-color: #ffd8d8;
        box-shadow: 0 0 8px #ff7676;
    }

## Installation and Usage

 1. Add the base files to your HTML page.
```
<script src='//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js' charset='utf-8'></script>
<script src='focusd.min.js' charset='utf-8'></script>
```
 Remember to include focusd.min.js *after* including the main jQuery library.

 2. In your JavaScript, initialize Focusd by calling `.focusd()` on a jQuery object:
```
$('form').focusd();
```

Focusd will be initialized for the elements selected as well as their descendent elements. Initialized elements will have the class *focusd* on blur. This can be customized in the options.

For performance reasons, passing the `body` element into the initializer is not recommended. Furthermore, there is a bug in IE7 if this is done as it seems that the `body` element is focusable in IE 7, regardless of what options are chosen.

## Options

An object can be passed to the initializer to specify configuration options:

 - elementGroups : Array
 
   *Default: `['links', 'forms', 'contenteditables', 'tabindexed']`* Possible values of this array are `links`, `forms`, `contenteditables`, and `tabindexed`. By default, all focusable elements of the jQuery collection and their descendants are initialized. Focusd can be initialized on certain classes of focusable elements:

    - `links`: Focusd will be initialized on `a`nchor elements that have a `href` attribute
    - `forms`: Focusd will be initialized on `input`, `select`, `button`, and `textarea` elements that are not disabled
    - `contenteditables`: Focusd will be initialized on elements for which the `contenteditable` property is true
    - `tabindexed`: Focusd will be initialized on elements that have a `tabindex` value (including negative values)

 - classname : String

   *Default: `'focusd'`* The name of the class given to elements that have received focus. This class is added after focus is removed from the element.
