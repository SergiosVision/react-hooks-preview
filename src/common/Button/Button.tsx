import React, {forwardRef, HTMLAttributes} from 'react'

const cx = require('classnames/bind').bind(require('./styles/button.module.sass'))

interface Props extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const {children, className, ...restProps} = props

    return (
        <button className={cx('button', className)} ref={ref} {...restProps}>{children}</button>
    )
})

export default Button