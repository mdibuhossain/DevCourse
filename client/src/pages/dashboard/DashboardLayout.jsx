import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
    const { user, logout } = useContext(AuthContext);
    return (
        <>
            <div id="wrapper">

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Dev Admin <sup>2</sup></div>
                    </Link>

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <hr className="sidebar-divider" />

                    {/* <div className="sidebar-heading">
                        Interface
                    </div> */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Courses</span>
                        </Link>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                {/* <h6 className="collapse-header">Custom Components:</h6> */}
                                <Link className="collapse-item" to="add-courses">Add new course</Link>
                                <Link className="collapse-item" to="all-courses">Course list</Link>
                                <Link className="collapse-item" to="cards.html">Revenue from courses</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Coupons</span>
                        </Link>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                                <Link className="collapse-item" to="utilities-color.html">Add new coupon</Link>
                                <Link className="collapse-item" to="utilities-border.html">Coupon list</Link>
                                <Link className="collapse-item" to="utilities-animation.html">Revenue from coupon</Link>
                            </div>
                        </div>
                    </li>

                    {/* <hr className="sidebar-divider" />

                    <div className="sidebar-heading">
                        Addons
                    </div> */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Transactions</span>
                        </Link>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                {/* <h6 className="collapse-header">Login Screens:</h6> */}
                                <Link className="collapse-item" to="login.html">All transactions</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="charts.html">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="tables.html">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span>
                        </Link>
                    </li>

                    <hr className="sidebar-divider d-none d-md-block" />

                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>


                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item dropdown no-arrow">
                                    <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user?.name}</span>
                                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        {/* <Link className="dropdown-item" to="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </Link> */}
                                        {/* <div className="dropdown-divider"></div> */}
                                        <button onClick={logout} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </button>
                                    </div>
                                </li>

                            </ul>

                        </nav>

                        <div className="container-fluid">

                            <Outlet />
                            {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard d</h1>
                            </div> */}

                        </div>

                    </div>

                </div>

            </div>
            
        </>
    );
}

export default DashboardLayout;