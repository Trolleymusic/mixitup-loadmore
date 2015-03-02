/**!
 * MixItUp loadmore v0.0.1
 *
 * @author    Wayne Durack.
 * @link      https://github.com/trolleymusic/mixitup-loadmore
 */ 

(function ($, undf) {
  $.extend(true, $.MixItUp.prototype, {

    // Mixitup hooks
    
    _actions: {
      _constructor: {
        post: {
          loadmore: function () {
            this.loadmore = {
              buttonClass: 'loadmore-button',
              buttonLabel: 'Load more',
              buttonWrapper: '.loadmore',
              initial: 2,
              lessClass: 'loadmore-less',
              lessLabel: 'less',
              loadMore: 2
            }

            $.extend(this.selectors, {
              button: '.' + this.loadmore.buttonClass,
              buttonWrapper: this.loadmore.buttonWrapper,
              less: '.' + this.loadmore.lessClass
            })

            this._currentCount = null
            this._$button = $()
          }
        }
      },
      
      _init: {
        post: {
          loadmore: function () {
            this._currentCount = this.loadmore.initial
          }
        }
      },
      
      _bindHandlers: {
        post: {
          loadmore: function () {
            // Find the button
            this._$button = $(this.selectors.buttonWrapper)
            // Bind the buttons
            // More
            this._$button.on('click.mixItUp.' + this._id, this.selectors.button, function () {
              this.multiMix({ loadmore: "more" })
            }.bind(this))
            // Less
            this._$button.on('click.mixItUp.' + this._id, this.selectors.less, function () {
              this.multiMix({ loadmore: "less" })
            }.bind(this))
          }
        }
      },
      
      _buildState: {
        post: {
          loadmore: function () {
            $.extend(this._state, {
              _currentCount: this._currentCount
            })
          }
        }
      },
      
      _sort: {
        post: {
          loadmore: function () {
            this._printSort()
          }
        }
      },
      
      _filter: {
        post: {
          loadmore: function () {
            
            var current = this._currentCount || this.loadmore.initial,
                total = this._$targets.length,
                show,
                hide;
            
            // Can't go over the total
            if (current > total) {
              current = total
            }
            
            if (this.loadmore.loadMore > 0) {
              
              show = this._$show.filter(function (i) {
                return i <= current - 1
              })
              
              hide = this._$show.filter(function (i) {
                return i > current - 1
              })
              
              this._$show = show
              this._$hide = this._$hide.add(hide)

              if (this._sorting) {
                this._printSort(true)
              }
            }
            
            // Make the button
            if (this._$button.length) {
              this.generateButtons()
            }

          }
        }
      },
      
      multiMix: {
        pre: {
          loadmore: function (args) {
            var args = this._parseMultiMixArgs(args)
            if (args.command.loadmore && args.command.loadmore === "more") {
              // Load more
              this._currentCount = this._currentCount + this.loadmore.loadMore
            } else if (args.command.loadmore && args.command.loadmore === "less") {
              // Load less
              this._currentCount = this.loadmore.initial
            } else if (args.command.filter || args.command.sort) {
              // Let something else deal with it
              this._currentCount = this._currentCount || this.loadmore.initial
            }
          }  
        }
      },
      
      destroy: {
        post: {
          loadmore: function () {
            this._$button.off('.mixItUp').html('')
          }
        }
      }
    },

    // Generate Load more and Less buttons
    generateButtons: function () {
      var buttonClass = this.loadmore.buttonClass || '',
          buttonLabel = this.loadmore.buttonLabel || 'Load more',
          buttonDisabled = this._currentCount == this._$targets.length ? ' disabled="disabled"' : '',
          lessClass = this.loadmore.lessClass || '',
          lessLabel = this.loadmore.lessLabel || 'Less',
          lessDisabled = this._currentCount <= this.loadmore.initial ? ' disabled="disabled"' : '',
          buttons = [
            '<button class="', buttonClass, '"', buttonDisabled, '>', buttonLabel, '</button>',
            '<button class="', lessClass, '"', lessDisabled, '>', lessLabel, '</button>'
            ].join('')
      
      this._$button.html(buttons)
    }
    
  })

})(jQuery);