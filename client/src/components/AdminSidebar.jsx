import React from 'react'

export default function AdminSidebar() {
  return (
    <aside className="adminapp-sidebar">
    <div className="adminapp-sidebar__user">
      {/* <img className="adminapp-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image"/> */}
      <div>
        {/* <p className="adminapp-sidebar__user-name"><img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO"/></p> */}
        <p className="adminapp-sidebar__user-designation"></p>
      </div>
    </div>
    <ul className="app-menu">
      <li><a className="app-menu__item" href="/admindashboard"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></a></li>
      {/* <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-laptop"></i><span className="app-menu__label">UI Elements</span><i className="treeview-indicator fa fa-angle-right"></i></a>
        <ul className="treeview-menu">
          <li><a className="treeview-item" href="bootstrap-components.html"><i className="icon fa fa-circle-o"></i> Bootstrap Elements</a></li>
          <li><a className="treeview-item" href="https://fontawesome.com/v4.7.0/icons/" target="_blank" rel="noopener"><i className="icon fa fa-circle-o"></i> Font Icons</a></li>
          <li><a className="treeview-item" href="ui-cards.html"><i className="icon fa fa-circle-o"></i> Cards</a></li>
          <li><a className="treeview-item" href="widgets.html"><i className="icon fa fa-circle-o"></i> Widgets</a></li>
        </ul>
      </li> */}
      <li><a className="app-menu__item" href="/viewPublisher"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">View Publisher</span></a></li>
      <li><a className="app-menu__item" href="/viewMessage"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">View Message</span></a></li>
      <li><a className="app-menu__item" href="/addCategory"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Add Category</span></a></li>
      <li><a className="app-menu__item" href="/AdminAddBook"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Add Book</span></a></li>
      <li><a className="app-menu__item" href="/adminViewReview"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">View Book Review</span></a></li>
      <li><a className="app-menu__item" href="/adminViewRequests"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">View Order Table</span></a></li>
      <li><a className="app-menu__item" href="/adminViewBook"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">My Books</span></a></li>
        
      {/* <ul className="treeview-menu">
          <li><a className="treeview-item active" href="form-components.html"><i className="icon fa fa-circle-o"></i> Form Components</a></li>
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
      </li> */}
      {/* <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-file-text"></i><span className="app-menu__label">Pages</span><i className="treeview-indicator fa fa-angle-right"></i></a>
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
      </li> */}
      {/* <li><a className="app-menu__item" href="docs.html"><i className="app-menu__icon fa fa-file-code-o"></i><span className="app-menu__label">Docs</span></a></li> */}
    </ul>
  </aside>
  )
}
