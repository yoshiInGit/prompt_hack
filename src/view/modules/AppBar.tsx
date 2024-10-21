import appbar_style from "./appbar_style.module.css"

const AppBar = () => {
    return(
        <div className={appbar_style.wrapper}>
            <div style={{width:'12px'}}/>
            <span className={`material-icons ${appbar_style.home}`}>
                home
            </span>
        </div>
    );
}

export default AppBar;