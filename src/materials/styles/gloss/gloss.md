---
path: '/materials/gloss'
title: 'gloss'
url: 'https://github.com/motion/gloss'
github_url: 'https://github.com/motion/gloss'
author: 'motion'
watchers_count: '14'
stargazers_count: '14'
img: './screenshot.png'
tags: ['components','css','css-in-js','cssinjs','js','jss','motion','react','stylesheets','theme']
subtitle: 'a powerful style system for building ui kits'
latestRelease:
  tag_name: 'undefined'
  name: 'undefined'
  url: 'undefined'
  created_at: 'undefined'
---

![alt text](screenshot.png)

powerful, lightweight, elegant css in js

- [JSS](https://github.com/cssinjs/jss) styles
- themes
- simple $style props through babel transform
- super fast
- built on jss
  - nice object to styles syntax
  - auto prefixes
  - animations
  - pseudos
  - media queries
  - '> selectors', etc

## install

```js
npm install --save gloss
```

babel transform for efficient $shorthand props

```js
{
  'babel': {
    'plugins': [
      ['gloss/transform', { 'decoratorName': 'style' }]
    ]
  }
}
```

## usage

here's a pretty good base view you can build from:

```js
// note: uses babel-jsx-if
import React from 'react'
import ReactDOM from 'react-dom'
import gloss, { color as $, Theme, ThemeProvide } from 'gloss'
import Icon from './icon'
import Popover from './popover'

const LINE_HEIGHT = 30

const { decorator: style } = gloss({
  baseStyles: styles,
  themeProp: 'theme',
  tagName: 'tagName',
  isColor: color => color && !!color.rgb,
  processColor: color => color.toString(),
})

ReactDOM.render(
  <ThemeProvide bright={{ background: '#000' }}>
    <Theme name='bright'>
      <Surface icon='name' />
    </Theme>
  </ThemeProvide>,
  document.querySelector('#app')
)

@style
export default class Surface {
  static defaultProps = {
    tagName: 'div',
    size: 1,
  }

  render({
    onClick,
    children,
    icon,
    iconProps,
    iconSize: _iconSize,
    iconAfter,
    iconColor,
    className,
    tagName,
    getRef,
    after
  }) {
    const { theme } = this
    const hasIconBefore = icon && !iconAfter
    const hasIconAfter = icon && iconAfter
    const stringIcon = typeof icon === 'string'
    const iconSize =
      _iconSize ||
      (theme && theme.element.style.fontSize * 0.9) ||
      Math.log(size + 1) * 15

    const passProps = {
      className,
      onClick,
      tagName,
      ref: getRef,
    }

    return (
      <surface {...!wrapElement && passProps}>
        {icon && <Icon
          $icon
          $iconAfter={hasIconAfter}
          name={icon}
          size={iconSize}
          {...iconProps}
        />}
        <element
          {...wrapElement && passProps}
          $hasIconBefore={hasIconBefore}
          $hasIconAfter={hasIconAfter}
        >
          {children}
        </element>
        {after || null}
      </surface>
    )
  }

  static style = {
    surface: {
      lineHeight: '1rem',
      fontWeight: 400,
      flexFlow: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
      position: 'relative',
      boxShadow: ['inset', 0, 0.5, 0, [255,255,255,0.2]],
    },
    minimal: {
      boxShadow: 'none',
    },
    element: {
      border: 'none',
      background: 'transparent',
      userSelect: 'none',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      pointerEvents: 'none',
    },
    hasIconBefore: {
      marginLeft: '0.7vh',
    },
    hasIconAfter: {
      marginRight: '0.7vh',
    },
    iconAfter: {
      order: 3,
    },
  }

  static disabledStyle = {
    opacity: 0.25,
    pointerEvents: 'none',
  }

  static dimStyle = {
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    },
  }

  static spacedStyles = {
    margin: [0, 5],
    borderRightWidth: 1,
  }

  static theme = (props, theme) => {
    // sizes
    const height = props.size * LINE_HEIGHT
    const width = props.width
    const padding =
      typeof props.padding !== 'undefined'
        ? props.padding
        : props.wrapElement ? 0 : [0, height / 4]
    const fontSize = props.fontSize || height * 0.5
    const flex = props.flex === true ? 1 : props.flex

    // radius
    const baseBorderRadius = props.borderRadius
      ? props.borderRadius
      : height / 5
    const borderRadius = props.circular
      ? height
      : baseBorderRadius || height / 10

    // colors
    const background =
      props.background || theme.base.background || 'transparent'
    const borderColor = props.borderColor || theme.base.borderColor
    const color = props.highlight
      ? props.highlightColor || theme.highlight.color || props.color
      : props.active ? theme.active.color : props.color || theme.base.color
    const hoverColor =
      (props.highlight && $(color).lighten(0.2)) ||
      props.hoverColor ||
      theme.hover.color ||
      (props.color && $(props.color).lighten(0.2))
    const iconColor = props.iconColor || color
    const iconHoverColor = props.iconHoverColor || hoverColor

    const segmentStyles = props.inSegment && {
      marginLeft: -1,
      borderLeftRadius: props.inSegment.first ? borderRadius : 0,
      borderRightRadius: props.inSegment.last ? borderRadius : 0,
    }
    const circularStyles = props.circular && {
      padding: 0,
      width: height,
      borderRadius: props.size * LINE_HEIGHT,
      overflow: 'hidden',
    }
    return {
      element: {
        ...props.elementStyles,
        fontSize,
        lineHeight: '1px',
        color,
        '&:hover': {
          color: hoverColor,
        },
      },
      surface: {
        height,
        width,
        flex,
        padding,
        borderRadius,
        borderColor,
        background,
        ...circularStyles,
        ...segmentStyles,
        ...(props.inline && this.constructor.surfaceStyle),
        ...(props.disabled && this.constructor.disabledStyle),
        ...(props.dim && this.constructor.dimStyle),
        ...(props.spaced && this.constructor.spacedStyle),
        ...(props.chromeless && {
          borderWidth: 0,
        }),
        '& > icon': {
          color: iconColor,
        },
        '&:hover > icon': {
          color: iconHoverColor,
        },
        '&:hover': {
          ...theme.hover,
        },
        // this is just onmousedown
        '&:active': {
          position: 'relative',
          zIndex: 1000,
        },
        // inForm
        ...(props.inForm && {
          '&:active': theme.active,
          '&:focus': theme.focus,
        }),
      },
    }
  }
}
```

        