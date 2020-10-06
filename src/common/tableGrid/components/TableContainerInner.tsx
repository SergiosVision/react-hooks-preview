import React, {HtmlHTMLAttributes} from 'react'

export interface TableContainerInnerProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const TableContainerInner: React.FC<TableContainerInnerProps> = ({children, ...restProps}) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}

export default TableContainerInner