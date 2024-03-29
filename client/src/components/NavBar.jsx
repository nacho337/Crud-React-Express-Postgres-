import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {

    document.addEventListener("click", e => {
        if (e.target.matches("a.dropdown-item") || e.target.matches("a.nav-link") || e.target.matches("a.navbar-brand")) { 
            // document.querySelector("div.show").classList.remove("show")
            document.querySelector("#navbarSupportedContent").classList.remove("show")
        }
    })
    
    // add 'show' to the classname
    // collapse navbar-collapse show

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-50">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#!">Navbar - Household Chores</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="nav-item dropdown">
                            {/* <Link className="nav-link dropdown-toggle" to="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-pencil fa-fw" />Data</Link> */}
                            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-pencil fa-fw" />CRUD</div>
                            <div className="dropdown-menu dropdown-menu-dark">
                                <div><CustomLink className="dropdown-item" to="/crud">Tasks</CustomLink></div>
                        
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}