/**
 * Focusd 0.1.2
 * https://github.com/RinkAttendant6/focusd
 * 
 * Copyright (c) 2013 Vincent Diep
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function($){
    'use strict';
    $.fn.focusd = function(options) {
        var defaults, settings, groups, elements = '', collection, i;
        
        defaults = {
            onRecieveFocus: false,
            onLoseFocus: true,
            elementGroups: ['links', 'forms', 'contenteditables', 'tabindexed'],
            classname: 'focusd'
        };
        
        settings = $.extend({}, defaults, options);
        
        groups = {
            links: 'a[href]',
            forms: 'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])',
            contenteditables: '[contenteditable]',
            tabindexed: '[tabindex]'
        };
        
        for(i=0; i < settings.elementGroups.length; i+=1) {
            if(groups.hasOwnProperty(settings.elementGroups[i])) {
                elements += ',' + groups[settings.elementGroups[i]];
            }
        }
        elements = elements.slice(1);
        
        collection = this.find(elements);
        if(this.is(elements)) {
            collection = collection.add(this);
        }
        
        return collection.each(function(){
            $(this).focusin(function(){
                if (settings.onRecieveFocus){
                    $(this).addClass(settings.classname);
                }
            });
            $(this).focusout(function(){
                if (settings.onLoseFocus){
                    $(this).addClass(settings.classname);
                }
            });
        });
    };
}(jQuery));