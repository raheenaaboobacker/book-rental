import React from 'react'

function AdminDashboard() {
  return (
    <div>  <header className="app-header"><a className="app-header__logo" href="index.html">Vali</a>
  <a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
    <ul className="app-nav">
      <li className="app-search">
        <input className="app-search__input" type="search" placeholder="Search"/>
        <button className="app-search__button"><i className="fa fa-search"></i></button>
      </li>
      <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i className="fa fa-bell-o fa-lg"></i></a>
        <ul className="app-notification dropdown-menu dropdown-menu-right">
          <li className="app-notification__title">You have 4 new notifications.</li>
          <div className="app-notification__content">
            <li><a className="app-notification__item" href="#"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                <div>
                  <p className="app-notification__message">Lisa sent you a mail</p>
                  <p className="app-notification__meta">2 min ago</p>
                </div></a></li>
            <li><a className="app-notification__item" href="#"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                <div>
                  <p className="app-notification__message">Mail server not working</p>
                  <p className="app-notification__meta">5 min ago</p>
                </div></a></li>
            <li><a className="app-notification__item" href="#"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                <div>
                  <p className="app-notification__message">Transaction complete</p>
                  <p className="app-notification__meta">2 days ago</p>
                </div></a></li>
            <div className="app-notification__content">
              <li><a className="app-notification__item" href="#"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Lisa sent you a mail</p>
                    <p className="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="#"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Mail server not working</p>
                    <p className="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="#"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Transaction complete</p>
                    <p className="app-notification__meta">2 days ago</p>
                  </div></a></li>
            </div>
          </div>
          <li className="app-notification__footer"><a href="#">See all notifications.</a></li>
        </ul>
      </li>
      <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></a>
        <ul className="dropdown-menu settings-menu dropdown-menu-right">
          <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg"></i> Settings</a></li>
          <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg"></i> Profile</a></li>
          <li><a className="dropdown-item" href="page-login.html"><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>
        </ul>
      </li>
    </ul>
  </header>
  <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
  <aside className="app-sidebar">
    <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image"/>
      <div>
        <p className="app-sidebar__user-name">John Doe</p>
        <p className="app-sidebar__user-designation">Frontend Developer</p>
      </div>
    </div>
    <ul className="app-menu">
      <li><a className="app-menu__item active" href="dashboard.html"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></a></li>
      <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-laptop"></i><span className="app-menu__label">UI Elements</span><i className="treeview-indicator fa fa-angle-right"></i></a>
        <ul className="treeview-menu">
          <li><a className="treeview-item" href="bootstrap-components.html"><i className="icon fa fa-circle-o"></i> Bootstrap Elements</a></li>
          <li><a className="treeview-item" href="https://fontawesome.com/v4.7.0/icons/" target="_blank" rel="noopener"><i className="icon fa fa-circle-o"></i> Font Icons</a></li>
          <li><a className="treeview-item" href="ui-cards.html"><i className="icon fa fa-circle-o"></i> Cards</a></li>
          <li><a className="treeview-item" href="widgets.html"><i className="icon fa fa-circle-o"></i> Widgets</a></li>
        </ul>
      </li>
      <li><a className="app-menu__item" href="charts.html"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Charts</span></a></li>
      <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-edit"></i><span className="app-menu__label">Forms</span><i className="treeview-indicator fa fa-angle-right"></i></a>
        <ul className="treeview-menu">
          <li><a className="treeview-item" href="form-components.html"><i className="icon fa fa-circle-o"></i> Form Components</a></li>
          <li><a className="treeview-item" href="form-custom.html"><i className="icon fa fa-circle-o"></i> Custom Components</a></li>
          <li><a className="treeview-item" href="form-samples.html"><i className="icon fa fa-circle-o"></i> Form Samples</a></li>
          <li><a className="treeview-item" href="form-notifications.html"><i className="icon fa fa-circle-o"></i> Form Notifications</a></li>
        </ul>
      </li>
      <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-th-list"></i><span className="app-menu__label">Tables</span><i className="treeview-indicator fa fa-angle-right"></i></a>
        <ul className="treeview-menu">
          <li><a className="treeview-item" href="table-basic.html"><i className="icon fa fa-circle-o"></i> Basic Tables</a></li>
          <li><a className="treeview-item" href="table-data-table.html"><i className="icon fa fa-circle-o"></i> Data Tables</a></li>
        </ul>
      </li>
      <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-file-text"></i><span className="app-menu__label">Pages</span><i className="treeview-indicator fa fa-angle-right"></i></a>
        <ul className="treeview-menu">
          <li><a className="treeview-item" href="blank-page.html"><i className="icon fa fa-circle-o"></i> Blank Page</a></li>
          <li><a className="treeview-item" href="page-login.html"><i className="icon fa fa-circle-o"></i> Login Page</a></li>
          <li><a className="treeview-item" href="page-lockscreen.html"><i className="icon fa fa-circle-o"></i> Lockscreen Page</a></li>
          <li><a className="treeview-item" href="page-user.html"><i className="icon fa fa-circle-o"></i> User Page</a></li>
          <li><a className="treeview-item" href="page-invoice.html"><i className="icon fa fa-circle-o"></i> Invoice Page</a></li>
          <li><a className="treeview-item" href="page-calendar.html"><i className="icon fa fa-circle-o"></i> Calendar Page</a></li>
          <li><a className="treeview-item" href="page-mailbox.html"><i className="icon fa fa-circle-o"></i> Mailbox</a></li>
          <li><a className="treeview-item" href="page-error.html"><i className="icon fa fa-circle-o"></i> Error Page</a></li>
        </ul>
      </li>
      <li><a className="app-menu__item" href="docs.html"><i className="app-menu__icon fa fa-file-code-o"></i><span className="app-menu__label">Docs</span></a></li>
    </ul>
  </aside>
  <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-dashboard"></i> Dashboard</h1>
        <p>A free and open source Bootstrap 4 admin template</p>
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-3">
        <div className="widget-small primary coloured-icon"><i className="icon fa fa-users fa-3x"></i>
          <div className="info">
            <h4>Users</h4>
            <p><b>5</b></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="widget-small info coloured-icon"><i className="icon fa fa-thumbs-o-up fa-3x"></i>
          <div className="info">
            <h4>Likes</h4>
            <p><b>25</b></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="widget-small warning coloured-icon"><i className="icon fa fa-files-o fa-3x"></i>
          <div className="info">
            <h4>Uploades</h4>
            <p><b>10</b></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="widget-small danger coloured-icon"><i className="icon fa fa-star fa-3x"></i>
          <div className="info">
            <h4>Stars</h4>
            <p><b>500</b></p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="tile">
          <h3 className="tile-title">Monthly Sales</h3>
          <div className="embed-responsive embed-responsive-16by9">
            <canvas className="embed-responsive-item" id="lineChartDemo"></canvas>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="tile">
          <h3 className="tile-title">Support Requests</h3>
          <div className="embed-responsive embed-responsive-16by9">
            <canvas className="embed-responsive-item" id="pieChartDemo"></canvas>
          </div>
        </div>
      </div>
    </div>
  </main></div>
  )
}

export default AdminDashboard