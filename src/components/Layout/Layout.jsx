import scss from './Layout.module.scss'

export const Layout = ({children}) =>{
    return(
        <div className={scss.container}>
        {children}
        </div>
    )
}