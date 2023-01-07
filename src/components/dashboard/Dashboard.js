import React, { useEffect } from "react";
import "./Dashboard.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
const Dashboard = () => {
	const navigate = useNavigate();

	const userActivity = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				navigate("/");
				// ...
			}
		});
	};

	useEffect(() => {
		userActivity();
	}, []);

	return (
		<>
			<Helmet>
				<title>Shewin | Dashboard</title>
			</Helmet>
			{/* <!-- Banner --> */}
			<a
				href="https://webpixels.io/components?ref=codepen"
				className="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative"
				style={{ zIndex: "1000" }}
			>
				<strong>Heya Shewinner:</strong> Lets grow better than yesterday. Browse
				all your capabilities →
			</a>

			{/* <!-- Dashboard --> */}
			<div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				{/* <!-- Vertical Navbar --> */}
				<nav
					className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
					id="navbarVertical"
				>
					<div className="container-fluid">
						{/* <!-- Toggler --> */}
						<button
							className="navbar-toggler ms-n2"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#sidebarCollapse"
							aria-controls="sidebarCollapse"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						{/* <!-- Brand --> */}
						<a href="#">
							<img
								width={70}
								height={70}
								src="https://user-images.githubusercontent.com/86917304/189530487-4f2eba29-9268-4801-9f4f-b2a9b03948a1.png"
								alt="..."
							/>{" "}
							<span
								style={{
									fontSize: "1.4rem",
									fontWeight: "700",
									paddingLeft: "10px",
								}}
							>
								Shewin
							</span>
						</a>
						{/* <!-- User menu (mobile) --> */}
						<div className="navbar-user d-lg-none">
							{/* <!-- Dropdown --> */}
							<div className="dropdown">
								{/* <!-- Toggle --> */}
								<a
									href="#"
									id="sidebarAvatar"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<div className="avatar-parent-child">
										<img
											alt="Image Placeholder"
											src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
											className="avatar avatar- rounded-circle"
										/>
										<span className="avatar-child avatar-badge bg-success"></span>
									</div>
								</a>
								{/* <!-- Menu --> */}
								<div
									className="dropdown-menu dropdown-menu-end"
									aria-labelledby="sidebarAvatar"
								>
									<a href="#" className="dropdown-item">
										Profile
									</a>
									<a href="#" className="dropdown-item">
										Settings
									</a>
									<a href="#" className="dropdown-item">
										Billing
									</a>
									<hr className="dropdown-divider" />
									<a href="#" className="dropdown-item">
										Logout
									</a>
								</div>
							</div>
						</div>
						{/* <!-- Collapse --> */}
						<div className="collapse navbar-collapse" id="sidebarCollapse">
							{/* <!-- Navigation --> */}
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="bi bi-house"></i> Dashboard
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="bi bi-bar-chart"></i> Mood Tracker
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="bi bi-chat"></i> Blogs
										<span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
											6
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="bi bi-bookmarks"></i> Set Reminder
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="bi bi-people"></i> Profile
									</a>
								</li>
							</ul>
							{/* <!-- Divider --> */}
							<hr className="navbar-divider my-5 opacity-20" />
							{/* <!-- Navigation --> */}
							<ul className="navbar-nav mb-md-4">
								<li>
									<div
										className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
										href="#"
									>
										Gynaecologists
										<span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
											13
										</span>
									</div>
								</li>
								<li>
									<a href="#" className="nav-link d-flex align-items-center">
										<div className="me-4">
											<div className="position-relative d-inline-block text-white">
												<img
													alt="Image Placeholder"
													src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
													className="avatar rounded-circle"
												/>
												<span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
											</div>
										</div>
										<div>
											<span className="d-block text-sm font-semibold">
												Dr. Marie Claire
											</span>
											<span className="d-block text-xs text-muted font-regular">
												Dr. Paris, FR
											</span>
										</div>
										<div className="ms-auto">
											<i className="bi bi-chat"></i>
										</div>
									</a>
								</li>
								<li>
									<a href="#" className="nav-link d-flex align-items-center">
										<div className="me-4">
											<div className="position-relative d-inline-block text-white">
												<span className="avatar bg-soft-warning text-warning rounded-circle">
													JW
												</span>
												<span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
											</div>
										</div>
										<div>
											<span className="d-block text-sm font-semibold">
												Michael Jordan
											</span>
											<span className="d-block text-xs text-muted font-regular">
												Bucharest, RO
											</span>
										</div>
										<div className="ms-auto">
											<i className="bi bi-chat"></i>
										</div>
									</a>
								</li>
								<li>
									<a href="#" className="nav-link d-flex align-items-center">
										<div className="me-4">
											<div className="position-relative d-inline-block text-white">
												<img
													alt="..."
													src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
													className="avatar rounded-circle"
												/>
												<span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
											</div>
										</div>
										<div>
											<span className="d-block text-sm font-semibold">
												Heather Wright
											</span>
											<span className="d-block text-xs text-muted font-regular">
												London, UK
											</span>
										</div>
										<div className="ms-auto">
											<i className="bi bi-chat"></i>
										</div>
									</a>
								</li>
							</ul>
							{/* <!-- Push content down --> */}
							<div className="mt-auto"></div>
							{/* <!-- User (md) --> */}
							<ul className="navbar-nav">
								{/* <li className="nav-item">
									<a className="nav-link" href="#">
										<i className="bi bi-person-square"></i> Account
									</a>
								</li> */}
								<li className="nav-item" style={{cursor:"pointer"}} onClick={() => auth.signOut()}>
									<a className="nav-link" href="#">
										<i
											className="bi bi-box-arrow-left"
										></i>{" "}
										Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{/* <!-- Main content --> */}
				<div className="h-screen flex-grow-1 overflow-y-lg-auto">
					{/* <!-- Header --> */}
					<header className="bg-surface-primary border-bottom pt-6">
						<div className="container-fluid">
							<div className="mb-npx">
								<div className="row align-items-center">
									<div className="col-sm-6 col-12 mb-4 mb-sm-0">
										{/* <!-- Title --> */}
										<h1 className="h2 mb-0 ls-tight">Application</h1>
									</div>
									{/* <!-- Actions --> */}
									{/* <div className="col-sm-6 col-12 text-sm-end">
										<div className="mx-n1">
											<a
												href="#"
												className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
											>
												<span className=" pe-2">
													<i className="bi bi-pencil"></i>
												</span>
												<span>Edit</span>
											</a>
											<a
												href="#"
												className="btn d-inline-flex btn-sm btn-primary mx-1"
											>
												<span className=" pe-2">
													<i className="bi bi-plus"></i>
												</span>
												<span>Create</span>
											</a>
										</div>
									</div> */}
								</div>
								{/* <!-- Nav --> */}
								<ul className="nav nav-tabs mt-4 overflow-x border-0">
									<li className="nav-item ">
										<a href="#" className="nav-link active">
											All files
										</a>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link font-regular">
											Shared
										</a>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link font-regular">
											File requests
										</a>
									</li>
								</ul>
							</div>
						</div>
					</header>
					{/* <!-- Main --> */}
					<main className="py-6 bg-surface-secondary">
						<div className="container-fluid">
							{/* <!-- Card stats --> */}
							<div className="row g-6 mb-6">
								<div className="col-xl-3 col-sm-6 col-12">
									<div className="card shadow border-0">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<span className="h6 font-semibold text-muted text-sm d-block mb-2">
														Sleeping Stats
													</span>
													<span className="h3 font-bold mb-0">$750.90</span>
												</div>
												<div className="col-auto">
													<div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
														<i className="bi bi-credit-card"></i>
													</div>
												</div>
											</div>
											<div className="mt-2 mb-0 text-sm">
												<span className="badge badge-pill bg-soft-success text-success me-2">
													<i className="bi bi-arrow-up me-1"></i>13%
												</span>
												<span className="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 col-12">
									<div className="card shadow border-0">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<span className="h6 font-semibold text-muted text-sm d-block mb-2">
														Blog Published
													</span>
													<span className="h3 font-bold mb-0">215</span>
												</div>
												<div className="col-auto">
													<div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
														<i className="bi bi-people"></i>
													</div>
												</div>
											</div>
											<div className="mt-2 mb-0 text-sm">
												<span className="badge badge-pill bg-soft-success text-success me-2">
													<i className="bi bi-arrow-up me-1"></i>30%
												</span>
												<span className="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 col-12">
									<div className="card shadow border-0">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<span className="h6 font-semibold text-muted text-sm d-block mb-2">
														Yoga Stats
													</span>
													<span className="h3 font-bold mb-0">1.400</span>
												</div>
												<div className="col-auto">
													<div className="icon icon-shape bg-info text-white text-lg rounded-circle">
														<i className="bi bi-clock-history"></i>
													</div>
												</div>
											</div>
											<div className="mt-2 mb-0 text-sm">
												<span className="badge badge-pill bg-soft-danger text-danger me-2">
													<i className="bi bi-arrow-down me-1"></i>-5%
												</span>
												<span className="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 col-12">
									<div className="card shadow border-0">
										<div className="card-body">
											<div className="row">
												<div className="col">
													<span className="h6 font-semibold text-muted text-sm d-block mb-2">
														Upcoming Period
													</span>
													<span className="h3 font-bold mb-0">95%</span>
												</div>
												<div className="col-auto">
													<div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
														<i className="bi bi-minecart-loaded"></i>
													</div>
												</div>
											</div>
											<div className="mt-2 mb-0 text-sm">
												<span className="badge badge-pill bg-soft-success text-success me-2">
													<i className="bi bi-arrow-up me-1"></i>10%
												</span>
												<span className="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
