

const sidebar = () =>{
    return (
        <div class="nav">
            <a href="/" class="nav__link" data-link><span></span><i class="fa fa-th-large"></i><span>Dashboard</span></a>
            <a href="/posts" class="nav__link" data-link><span></span><i class="fa fa-comment"></i><span>Posts</span></a>
            <a href="/settings" class="nav__link" data-link><span></span><i class="fa fa-cog"></i><span>Settings</span></a>
            <div class="menuDet"><button id="clos">&#10094;</button><button id="opn">&#10095;</button></div>
        </div>
    )
}
export default sidebar;