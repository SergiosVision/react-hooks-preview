import React, {forwardRef} from 'react'
import Paper, {PaperProps} from '@material-ui/core/Paper'

const cx = require('classnames/bind').bind(require('../styles/paper.module.sass'))

export type MainContainerProps = Partial<PaperProps>

const MainContainer: React.FC<PaperProps> = forwardRef<unknown, MainContainerProps>(({children, className, ...restProps}, ref) => {
    return (
        <Paper ref={ref} className={cx('wrapper', className)} {...restProps}>{children}</Paper>
    )
})

export default MainContainer